import Head from "next/head"
import { Container, InfoHomeContainer, ImageHomeContainer, Content } from '../styles/homeStyles'
import { FaHandSpock } from 'react-icons/fa'
import { BsFillChatLeftQuoteFill } from 'react-icons/bs'
import { Credits } from "../components/Credits"
import { SubscribeButton } from '../components/SubscribeButton'
import { GitHubOpenSourceButton } from '../components/GitHubOpenSourceButton'

export default function Home(){
  return (
    <>
      <Head><title>Play Battle Field - A Love Community</title></Head>
      <Container img="/images/background-spotted.jpeg">
          <Content>
              <InfoHomeContainer>
                  <div>
                      <h3><FaHandSpock />Hey, welcome!</h3>
                      <h1>Share <span>Your Story</span> Anonymously.</h1>
                      <h2><BsFillChatLeftQuoteFill /><i>Share anything from your stories with others</i>.</h2>
                      <p><span>It cost the donation you desire</span>.</p>
                      <SubscribeButton />
                      <GitHubOpenSourceButton />
                  </div>
              </InfoHomeContainer>
              <ImageHomeContainer>
              </ImageHomeContainer>
          </Content>
          <Credits />
      </Container>
    </>
  )
}
