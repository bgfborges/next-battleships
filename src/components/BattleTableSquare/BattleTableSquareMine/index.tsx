import { useState } from 'react';
import { BattleTableSquareItem, BattleTableSquareItemTarget, BattleTableSquareItemPosition, ShipContainer, ShipPeace  } from "../styles";

export function BattleTableSquareMine(){

    // Aircraft Ship Model
    // 1 - Aircraft
    // 2 - Battleship
    // 3 - Crusier
    // 4 - Submarine
    // 5 - Desteoyer

    const [target, setTarget] = useState(['A1', 'A2', 'A3', 'A4', 'A5', 'C6', 'C7', 'C8', 'C9', 'F7', 'G7', 'H7', 'D1', 'G3']);
    const [ships, setShips] = useState([
        {name: 'Aircraft', size: '5', r: 'h', l: ['A1', 'A2', 'A3', 'A4', 'A5']},
        {name: 'Battleship', size: '4', r: 'h', l: ['C6', 'C7', 'C8', 'C9']},
        {name: 'Crusier', size: '3', r: 'v', l: ['F7', 'G7', 'H7']},
        {name: 'Submarine', size: '2', r: 'h', l: ['D1', 'D2']},
        {name: 'Desteoyer', size: '2', r: 'v', l: ['F3', 'G3']},
    ]);

    // Return the Letter Position to make it standard called by number
    const lp = (l: string) => {
        var letters = ['A','B','C','D','E','F','G','H','I','J'];
        var i = letters.indexOf(l);
        return keys[i].key;
    }

    const position = (letter: string, num: number) => {
        return lp(letter) + keys[0].value[num];
    }

    const checkTarget = (key: string, num: number) => {
        return target.find(p => p === String(key+(Number(num+1))) );
    }

    const getShipPeace = (key: string, num: number) => {
        let res = ships.some(p => p.l.find( l => l === String(key+(num+1))));
        return res;
    }

    const isWhatPeace = (key: string, num: number) => {
        let idx = key+(num+1);

        const getShip = ships.map( ({ l }) => [ l[0], l[l.length - 1] ] );
        const res = getShip.map(el => el[0] === idx ? 'top' : el[el.length - 1] === idx ? 'bottom' : null );
        const tId = res.indexOf('top');
        const bId = res.indexOf('bottom');
        
        return res[tId >= 0 ? tId : bId >= 0 ? bId : null];
    }

    const rotation = (key: string, num: number) => {
        let idx = key+(num+1);
        
        const getShip = ships.filter( s => s.l.includes(idx) );
        const r = getShip.map( s => s.r );
        return r[0];
        
    }

    const numKeys = Array.from({length: 10}, (_, i) => String(i + 1));
    const letterKeys = ['A','B','C','D','E','F','G','H','I','J'];
    
    const keys = [];

    for( var i = 0; 10 > keys.length; i++ ){
        keys.push({
            key: letterKeys[i],
            value: numKeys,
        });
    }

    let rows = [];

    keys.forEach(({ key }, i) => {
        keys[i].value.map((e: any, num: number) => {
            return rows.push(<BattleTableSquareItem key={position(key, num)}>{
                checkTarget(key, num) === position(key, num) ?  
                <BattleTableSquareItemTarget>
                    { 
                    getShipPeace(key, num) ? 
                    <ShipContainer key={'s-' + position(key, num) }>
                        <ShipPeace r={rotation(key, num)} kind={ isWhatPeace(key, num) } />
                    </ShipContainer> : 
                    'x'
                    }
                </BattleTableSquareItemTarget> : 
                <BattleTableSquareItemPosition />
            }</BattleTableSquareItem>);
        });
    });

    return <div>{rows}</div>;
}