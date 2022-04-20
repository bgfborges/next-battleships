import { SubscribeButtonContainer } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import { useRouter } from 'next/router'

export function SubscribeButton() {
    const { data: session, status } = useSession()
    const router = useRouter();


    async function handleSubscribe(){

        if(status === 'unauthenticated'){
            signIn('google')
            return
        }

        if(session.activeSubscription){
            router.push('/meet');
            return;
        }

        // Create the Checkout Session
        try {

            const response = await api.post('/subscribe')

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        } catch(err) {
            alert(err.message)
        }
    }

    return(
        <SubscribeButtonContainer onClick={handleSubscribe}>Full Access Now</SubscribeButtonContainer>
    )
}