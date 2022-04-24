import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    height: calc(100vh - 80px);
    margin: auto;
    display: flex;
    align-items: center;
    padding: 50px 100px;

`;

export const ChatListContainer = styled.div`

    width: 100%;
    height: 90%;
    background: var(--red);
    border-radius: 20px;
    padding: 40px;

`;

export const ChatList = styled.div`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;

    li{
        width: fit-content;
        padding: 40px 20px;
        background: #f29da5;
        margin: 10px;
        align-items: center;
        justify-content: center;
        transition: all ease 200ms;
        cursor: pointer;
        border-radius: 5px;

        display: flex;

        div:nth-child(1) {
            padding: 10px;
            font-size: 30px;
            width: 100%;
            text-align: center;
        }

        &:hover {
            filter: brightness(90%);
        }

        a {
            color: white;
            text-decoration: none;

            div {
                display: flex;
                justify-content: center;
                flex-direction: column;
    
                h4 {
                    text-align: center;
                }
            }
        }

    }
`;

export const ChatContainer = styled.div`
    
    width: 80%;
    height: 100%;
    background: var(--dark);
    border-radius: 20px 0 0 20px;
    display: flex;
    flex-direction: column;

`;

export const InteractionContainer = styled.div`

    flex: 1;
    height: 100%;
    background: var(--red);
    border-radius: 0 20px 20px 0;

`;

export const ChatHeader = styled.div`
    
    width: 100%;
    padding: 20px;
    background: #555;
    border-radius: 20px 0 0 0;
    font-weight: 600;

`;

export const ChatInput = styled.div`

    width: 100%;
    padding: 50px;
    background: #ddd;
    border-radius: 0 0 0 20px;
    padding: 20px;
    display: flex;

    button {
        padding: 20px;
        border: 0;
        background: var(--red);
        color: white;
    }

    textarea {
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 5px;

        border: none;
        overflow: auto;
        outline: none;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        resize: none; /*remove the resize handle on the bottom right*/
    }

`;

export const ChatContentMessages = styled.div`

    width: 100%;
    height: 100%;
    background: #222;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;

    ul {
        list-style: none;
        padding: 30px;
        margin: 0;
    }

`;

interface MessageProps {
    isSender: 0 | 1;
}

export const Message = styled.li<MessageProps>`

    display: block;
    max-width: 500px;
    min-width: 10%;
    width: fit-content;
    padding: 20px;
    background: ${props => props.isSender === 0 ? '#555' : 'var(--red)'};
    margin-bottom: 15px;
    border-radius: 5px;

`;