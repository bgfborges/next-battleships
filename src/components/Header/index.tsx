import { useState } from 'react';
import { Container, MenuSide, MenuContent } from './styles';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import Img from 'next/image'
import { ActiveLink } from '../ActiveLink';

export function Header(){

    const [showMenu, setShowMenu] = useState(false);
    const session = useSession()

    return(
        <Container>
            <div>
                <img src="/images/battleship-simple.png" alt="Logo Battleship" />
                <ul>
                    <ActiveLink path="/">Home</ActiveLink>
                    <ActiveLink path="/spotted-info">Spotted Love</ActiveLink>
                    <ActiveLink path="/meet">Meet People</ActiveLink>
                    <ActiveLink path="/posts">Posts</ActiveLink>
                </ul>
            </div>
            <div>
                { session.status === 'authenticated' ?
                    <>
                        <button onClick={() => setShowMenu(!showMenu)}>
                            <img src={session.data.user.image} />
                            Gabriel Borges
                        </button>
                        <MenuSide>
                            <MenuContent show={showMenu}>
                                <ul>
                                    <li><Link href="/games"><a>Start New Game</a></Link></li>
                                    <li><Link href="/meet/community"><a>Community</a></Link></li>
                                    <li><a>Profile</a></li>
                                    <li><a>Friends</a></li>
                                    <li onClick={ () => signOut() }><a>Logout</a></li>
                                </ul>
                            </MenuContent>
                        </MenuSide>
                    </>
                    :
                    <button onClick={() => signIn('google')}><span><FcGoogle /></span>Login with Google</button>
                }
            </div>
        </Container>
    );
}