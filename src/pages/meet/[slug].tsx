import { query as q } from "faunadb";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import { fauna } from "../../services/fauna";
import { Container, ChatContainer, InteractionContainer, ChatHeader, ChatInput, ChatContentMessages, Message } from "./styles";

const socket = io('http://localhost:4000');
socket.connect()

type Message = {
    sender: string;
    content: string;
}

export default function Chat({ members, chat, listMessages }) {

    const { data } = useSession();
    const [messages, setMessages] = useState<Message[]>(listMessages);
    const [message, setMessage] = useState<string>('');

    const messageInput = useRef<HTMLTextAreaElement>();

    useEffect(() => {
        socket.on(chat.data.slug, (data) => {
            setMessages([...messages, data]);
        });
    }, [messages, chat]);

    const sendMessageHandler = () => {
        if(message.length > 0){
            messageInput.current.value = '';
            setMessage('');
            socket.emit('message', { slug: chat.data.slug, content: message, sender: data.user.email });
        }
    }

    const handleIsSender = (sender: string) => {
        if(sender === data?.user.email){
            return 0;
        } else {
            return 1;
        }
    }

    return (
        <>
            <Head><title>{ members.friend.name } | Chat</title></Head>
            <Container>
                <ChatContainer>
                    <ChatHeader>{ members.friend.name }</ChatHeader>
                    <ChatContentMessages>
                        <ul>
                            {messages.map( (mess, i) => <Message key={i} isSender={handleIsSender(mess.sender)}>{mess.content}</Message>)}
                        </ul>
                    </ChatContentMessages>
                    <ChatInput>
                        <textarea ref={messageInput} onChange={(e)=>setMessage(e.target.value)} />
                        <button onClick={sendMessageHandler}>Send</button>
                    </ChatInput>
                </ChatContainer>
                <InteractionContainer></InteractionContainer>
            </Container>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const session = await getSession({ req });
    let { slug } = params;

    if(!session?.activeSubscription){
        return {
            redirect: {
                destination: `/meet`,
                permanent: false
            }
        }
    }

    const findFriend: { data: {email: string, name: string} } = await fauna.query(
        q.Get(
            q.Match(
                q.Index('user_by_ref'),
                q.Ref(q.Collection('users'), slug)
            )
        )
    );

    const {me, friend} = {
        me: {
            name: session.user.name,
            email: session.user.email
        }, 
        friend: {
            name: findFriend.data.name,
            email: findFriend.data.email
        }
    };

    slug = uuidv4();

    const isFriend: { data: { messages: [] } } = await fauna.query(
        q.If(
            q.Not(
                q.Any([
                    q.Exists(
                        q.Intersection([
                            q.Match(
                                q.Index('chat_by_friend_email'),
                                friend.email
                            ),
                            q.Match(
                                q.Index('chat_by_my_email'),
                                me.email
                            )
                        ])
                    ),
                    q.Exists(
                        q.Intersection([
                            q.Match(
                                q.Index('chat_by_friend_email'),
                                me.email
                            ),
                            q.Match(
                                q.Index('chat_by_my_email'),
                                friend.email
                            )
                        ])
                    )
                ])
            ),
            q.Create(
                q.Collection('chats'),
                {
                    data: {
                        slug,
                        users: {
                            me: me.email,
                            friend: friend.email
                        },
                        messages: []
                    }
                }
            ),
            q.If(
                q.Exists(
                    q.Intersection([
                        q.Match(
                            q.Index('chat_by_friend_email'),
                            friend.email
                        ),
                        q.Match(
                            q.Index('chat_by_my_email'),
                            me.email
                        )
                    ])
                ),
                q.Get(
                    q.Intersection([
                        q.Match(
                            q.Index('chat_by_friend_email'),
                            friend.email
                        ),
                        q.Match(
                            q.Index('chat_by_my_email'),
                            me.email
                        )
                    ])
                ),
                q.Get(
                    q.Intersection([
                        q.Match(
                            q.Index('chat_by_friend_email'),
                            me.email
                        ),
                        q.Match(
                            q.Index('chat_by_my_email'),
                            friend.email
                        )
                    ])
                )
            )
        )
    );

    const user: {ref: { id: string }} = await fauna.query(
        q.Get(
            q.Match(
                q.Index('user_by_email'),
                session.user.email
            )
        )
    );

    const onlineUser = {
        name: session.user.name,
        email: session.user.email,
        id: user.ref.id,
    };

    socket.emit('add-online-user', onlineUser);

    return {
        props: {
            members: {
                me,
                friend
            },
            chat: JSON.parse(JSON.stringify(isFriend)),
            listMessages: JSON.parse(JSON.stringify(isFriend.data.messages))
        }
    }
}