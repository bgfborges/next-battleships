import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { Container, ChatListContainer, ChatList } from './styles';
import io from 'socket.io-client';
import { fauna } from '../../services/fauna';
import { query as q } from 'faunadb';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:4000');
socket.connect();

type User = {
    name: string;
    email: string;
    id: string;
}

export default function Community({ me }: { me: User }) {

    const [onlineUsers, setOnlineUSers] = useState<User[]>([]);
    
    useEffect(() => {
        socket.on('online-users', (data) => {
            setOnlineUSers([...data]);
        });
    }, [socket]);

    return(
        <Container>
            <ChatListContainer>
                <ChatList>
                    {onlineUsers.map( user => user.email !== me.email && 
                        <li key={user.id}>
                            <Link href={`/meet/${user.id}`}>
                                <a>
                                <div>
                                🇷🇺
                                </div>
                                <div>
                                    <h4>{user.name}</h4>
                                    <small>Im here to find my love.</small>
                                </div>
                                </a>
                            </Link>
                        </li>  
                    )}
                </ChatList>
            </ChatListContainer>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req });

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
            me: JSON.parse(JSON.stringify(onlineUser))
        }
    }
}