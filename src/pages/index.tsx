import Head from "next/head"
import { Container, InfoHomeContainer, ImageHomeContainer, Content } from '../styles/homeStyles'
import { FaHandSpock } from 'react-icons/fa'
import { BsFillChatLeftQuoteFill } from 'react-icons/bs'
import { Credits } from "../components/Credits"
import { SubscribeButton } from '../components/SubscribeButton'
import { GitHubOpenSourceButton } from '../components/GitHubOpenSourceButton'
import { GetStaticProps } from "next"
import { stripe } from "../services/stripe"

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps){

  return (
    <>
      <Head><title>Play Battle Field - A Love Community</title></Head>
      <Container img="/images/background-image.jpeg">
          <Content>
              <InfoHomeContainer>
                  <div>
                      <h3><FaHandSpock />Hey, welcome!</h3>
                      <h1>Play the <span>Love</span> Battleships.</h1>
                      <h2><BsFillChatLeftQuoteFill /><i>Win to Refuse the Boring Actitivies with your Beloved</i>.</h2>
                      <p><span>It cost the donation you desire after { product.amount }</span>.</p>
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

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1Kn6bYCVHbWovL3pf5Doym0s');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('es-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}