import { AiFillHeart } from 'react-icons/ai'
import { CreditsContainer } from './styles'

export function Credits() {
    return(
        <>
        <CreditsContainer><p>Created with <AiFillHeart color="red" size="20" /> by <strong><a href="https://github.com/bgfborges/love-naval-battle-front-react" target="_blank" rel="noreferrer"><span>Gabriel Borges</span></a>.</strong></p></CreditsContainer>
        </>
    )
}