import Head from "next/head"
import { Container, Content, PopPupStartGameContainer, PopUpContent, StartGameButton } from './styles'
import { Credits } from "../../components/Credits"
import { GetServerSideProps } from "next/types"
import { getSession } from "next-auth/react"
import { useState } from "react"

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps){

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Head><title>Play Battle Field - A Love Community</title></Head>
      <PopPupStartGameContainer visible={visible}>
        <PopUpContent>
          <h2>Let's Start a New Game</h2>
          <p>Generate a new link or invite your friends.</p>
          <div>
            <input type="search" autoFocus />
            <div>
              <span>http://localhost:3000/play/battelships/uiiwuefeiuwfh</span>
              <button>Copy Link</button>
            </div>

            <StartGameButton>Start Game</StartGameButton>
          </div>
        </PopUpContent>
      </PopPupStartGameContainer>
      <Container img="/images/background-image.jpeg">
          <Content>
            <h1>Choose your next game</h1>
            <div onClick={()=>setVisible(true)}>
              <h2>Play Love Battleships</h2>
            </div>
            <div className="coming">
              <h2>Play Love Monopoli</h2>
              <small>Coming Soon</small>
            </div>
            <div className="coming">
              <h2>The Virtual Bar</h2>
              <small>Coming Soon</small>
            </div>
          </Content>
          <Credits />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const session = await getSession({ req });

  if(!session?.activeSubscription){
    return {
      redirect: {
          destination: `/`,
          permanent: false
      }
    }
  }

  return {
    props: {
    },
  }
}