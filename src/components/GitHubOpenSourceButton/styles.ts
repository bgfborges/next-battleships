import styled from 'styled-components'

export const GitHubOpenSourceButtonContainer = styled.button`

    text-decoration: none;
    color: white;
    padding: 30px 50px;
    font-size: 20px;
    border: 0;
    border-radius: 50px;
    transition: filter 0.2s;
    font-weight: bold;

    margin-left: 20px;
    background: var(--dark);

    svg {
        margin-bottom: -3px;
        margin-right: 15px;
    }

    &:hover{
        filter: brightness(0.8);
    }

`;