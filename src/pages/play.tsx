import Head from 'next/head'
import { 
    BodyContainer, 
    SideProfileContainer, 
    ProfilePhoto, 
    BodyContent, 
    BattleTable, 
    ChatMarines, 
    GameBoard, 
    SideProfileContent, 
    ChatContent, 
    HeaderChat, 
    ContentChat, 
    BottomChat, 
    SideProfileReactions 
} from '../styles/playStyles'
import { BattleTableSquareEnemy } from '../components/BattleTableSquare/BattleTableSquareEnemy'
import { BattleTableSquareMine } from '../components/BattleTableSquare/BattleTableSquareMine'
import { RiRadioButtonLine } from 'react-icons/ri'
import { AiOutlineSend, AiFillHeart } from 'react-icons/ai'
import { FaAngry, FaSadCry } from 'react-icons/fa'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { Credits } from "../components/Credits"

export default function Play() {
    return(
        <>
            <Head>
                <title>Play Love BattleShips Now | War Table</title>
            </Head>
            <BodyContainer img='/images/background-image.jpeg'>
                <ChatMarines>
                    <ChatContent>
                        <HeaderChat>
                            <div>Reginka Vdovina</div>
                            <BsFillCameraVideoFill />
                        </HeaderChat>
                        <ContentChat />
                        <BottomChat>
                            <input type="text" />
                            <button><AiOutlineSend /></button>
                        </BottomChat>
                    </ChatContent>
                </ChatMarines>
                <GameBoard>
                    <SideProfileContainer>
                        <SideProfileContent>
                            <SideProfileReactions>
                                <li><AiFillHeart size={30} color="red" /></li>
                                <li><BiHappyHeartEyes size={30} color="lightyellow" /></li>
                                <li><FaSadCry size={30} color="lightpink" /></li>
                                <li><FaAngry size={30} color="lightblue" /></li>
                            </SideProfileReactions>
                            <ProfilePhoto>
                                <div>
                                    <img src='/images/profile-1.png' alt="Profile One" />
                                </div>
                            </ProfilePhoto>
                            <div>
                                <h3>Gabriel Borges</h3>
                                <h4>Major</h4>
                            </div>
                        </SideProfileContent>
                        <SideProfileContent>
                            <ProfilePhoto>
                                <div>
                                    <img src='/images/profile-2.jpg' alt="Profile One" />
                                </div>
                            </ProfilePhoto>
                            <div>
                                <h3>Reginka Vdovina</h3>
                                <h4>General</h4>
                            </div>
                        </SideProfileContent>
                    </SideProfileContainer>
                    <BodyContent>
                        <section>
                            <h2>Disputa do Dia</h2>
                            <h3>O <strong>Perdedor</strong> lava a louça do jantar!</h3>
                        </section>

                        <BattleTable>
                            <ul>
                                <BattleTableSquareMine />
                            </ul>
                            <ul>
                                <BattleTableSquareEnemy />
                            </ul>
                        </BattleTable>
                        <Credits />
                    </BodyContent>
                </GameBoard>
            </BodyContainer>
        </>
    )
}