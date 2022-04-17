import styled from 'styled-components'

export const SubscribeButtonContainer = styled.button`

    text-decoration: none;
        color: white;
        background: var(--red);
        padding: 30px 50px;
        font-size: 20px;
        border: 0;
        border-radius: 50px;
        transition: filter 0.2s;
        font-weight: bold;

        & + a {
            margin-left: 20px;
            background: var(--dark);

            svg {
                margin-bottom: -3px;
                margin-right: 15px;
            }
        }

        &:hover{
            filter: brightness(0.8);
        }

`;