import styled from 'styled-components';

interface BodyContainerProps {
    img: string;
}

export const BodyContainer = styled.div<BodyContainerProps>`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vh - 80px);
    z-index: 100;
    background: linear-gradient(0deg, var(--back), var(--blue-transparent)), url('${ (img) => img.img  }');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const GameBoard = styled.div`

    width: 100%;
    height: 100%;
    display: flex;

`;

export const HeaderChat = styled.div`
    width: 100%;
    padding: 20px;
    color: white;
    background: var(--red);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    svg {
        color: var(--back);
        cursor: pointer;
    }
    > div {
        display: flex;
        align-items: center;
        svg {
            margin-right: 5px;
            color: #0af08c;
        }
    }
`;

export const ChatMarines = styled.div`
    width: 20%;
    height: 100%;
    padding-right: 10px;
`;

export const ChatContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--back);
`;

export const ContentChat = styled.div`
    width: 100%;
    flex: 1;
`;

export const BottomChat = styled.div`
    width: 100%;
    height: 50px;
    background: white;
    display: flex;

    input {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 5px;
    }

    input:focus {outline:none!important;}

    button {
        padding: 15px;
        border: none;
        background: var(--red);
    }
`;

export const SideProfileContainer = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

 export const SideProfileReactions = styled.ul`
    width: 100%;
    height: 40px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    svg {
        transition: 100ms transform;
        cursor: pointer;
        
        &:hover{
            transform: scale(1.5);
        }
    }
 `;

export const SideProfileContent = styled.div`

    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 30px;
    background: rgba(0, 0, 8, 0.59);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    -webkit-backdrop-filter: blur(4.9px);
    border: 1px solid rgba(0, 0, 8, 0.52);

    h3 {
        margin-top: 10px;
    }

    h4 {
        font-weight: 400;
    }
`;

export const ProfilePhoto = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    div{
        width: 7vw;
        height: 7vw;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`;

export const BodyContent = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 20px;

        h2 {
            font-size: 30px;
        }
    
        h3 {
            margin-top: 0px;
            font-size: 15px;
            font-weight: 400;
        }
    }

`;

export const BattleTable = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    --TableWidth: 30vw;
    margin: 1vw;

    ul:nth-child(2){
        li:hover{
            background-color: rgba(255, 150, 150, 0.65);
        }
        
        li:hover > div{
            visibility: visible;
        }

        li {
            cursor: pointer;
        }
    }

    ul {
        width: var(--TableWidth);
        height: var(--TableWidth);
        background: rgba(255, 150, 150, 0.59);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.9px);
        -webkit-backdrop-filter: blur(4.9px);
        border: 1px solid rgba(255, 150, 150, 0.52);

        li{
            border-right: 1px solid rgba(255, 150, 150, 0.52);
            border-bottom: 1px solid rgba(255, 150, 150, 0.52);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        li:nth-child(10n){
            border-right: none;
        }
        
        li:nth-child(10){
            border-right: none;
            border-radius: 0 16px 0 0;
        }
        
        li:nth-child(n+100){
            border-bottom: none;
            border-right: none;
            border-radius: 0 0 16px 0;
        }
        
        li:nth-child(91n){
            border-bottom: none;
            border-radius: 0 0 0 16px;
        }

        li:nth-child(1){
            border-radius: 16px 0 0 0;
        }
    }
`;

export const Credits = styled.div`
    margin-top: 30px;
`;