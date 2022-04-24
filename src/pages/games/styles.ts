import styled from 'styled-components';

interface ContainerProps {
    img: string;
}

export const Container = styled.div<ContainerProps>`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    background: linear-gradient(240deg, rgba(1, 30, 40, 0.99), rgba(1, 30, 40, 0.99)), url('${ (img) => img.img }');
    background-image: cover;
    background-position: left;
`;

export const Content = styled.div`
    width: 100vw;
    min-height: calc(100% - 40px);
    padding: 50px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 140px 35vh;
    grid-gap: 20px;
    grid-template-areas: "a a a";

    h1 {
        grid-column-start: 1;
        grid-column-end: 4;
        text-align: center;
        font-size: 60px;
    }

    div {
        grid-area: "a";
        background: var(--blue);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all ease 200ms;

        &:hover{
            filter: brightness(80%);
        }

        &.coming {
            background: var(--dark);
            color: #999;
        }
    }
`;
;

interface PopPupStartGameContainerProps {
    visible: boolean;
}

export const PopPupStartGameContainer = styled.div<PopPupStartGameContainerProps>`
    position: fixed;
    background: linear-gradient(#000000F1, var(--blue));
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${props => props.visible ? 'visible' : 'hidden' };
`;

export const PopUpContent = styled.div`
    width: 80%;
    height: 80%;
    background: white;
    border-radius: 10px;
    padding: 3rem;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 50px;
        text-align: center;
    }

    > div {
        padding: 2rem;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input {
            padding: 20px;
            width: 100%;
            border: 0;
            outline: 0;
            background: #e0e0e0;
            border-radius: 40px;
        }

        div {
            width: 60%;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            background: #efefef;
            border-radius: 50px;

            span {
                padding: 2rem;
            }

            button {
                padding: 1rem 2rem;
                background: var(--dark);
                border: 0;
                outline: 0;
                border-radius: 30px;
                color: white;
                font-weight: bold;
            }
        }
    }
`;

export const StartGameButton = styled.button`
    padding: 2rem 3rem;
    border: 0;
    outline: 0;
    border-radius: 40px;
    background-color: var(--red);
    color: white;
    font-weight: bold;
    margin-top: 40px;
`;