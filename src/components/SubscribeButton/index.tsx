import { SubscribeButtonContainer } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

export function SubscribeButton() {
    const { status } = useSession()

    async function handleSubscribe(){
        if(status === 'unauthenticated'){
            signIn('google')
            return
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