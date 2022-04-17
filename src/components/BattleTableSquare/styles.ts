import styled from 'styled-components';

export const BattleTableSquareItem = styled.li`
    float: left;
    list-style:none;
    width: calc((var(--TableWidth) - 2px)/10);
    height: calc((var(--TableWidth) - 2px)/10);

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 150, 150, 0.99);
    }
`;

export const BattleTableSquareItemPosition = styled.div`

`;

export const BattleTableSquareItemTarget = styled.div`
    
`;

export const ShipContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5px;
`;

interface ShipPeace {
    kind: string;
    r: string;
}

export const ShipPeace = styled.span<ShipPeace>`
    width: 50%;
    height: 85%;
    background: white;
    border-radius: ${ props => (props.kind === 'top') ? '20px 20px 0 0' : (props.kind === 'bottom') ? '0px 0px 20px 20px' : '0' };
    transform: ${ props => (props.r === 'h' ? 'rotate(-90deg);' : 'rotate(0);' )}
`;