import { useState } from 'react';
import { Container, MenuSide, MenuContent } from './styles';
import { FcGoogle } from 'react-icons/fc';
import { RiCloseCircleFill } from 'react-icons/ri';
import { signIn, useSession, signOut } from 'next-auth/react'

export function Header(){

    const [showMenu, setShowMenu] = useState(false);
    const session = useSession()

    return(
        <Container>
            <div>
                <img src="/images/battleship-simple.png" alt="Logo Battleship" />
                <ul>
                    <li className="active">Home</li>
                    <li>Spotted Love</li>
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
                                    <li><a>Start New Game</a></li>
                                    <li><a>Profile</a></li>
                                    <li><a>Friends</a></li>
                                    <li onClick={ () => signOut() }><a>Sair</a></li>
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