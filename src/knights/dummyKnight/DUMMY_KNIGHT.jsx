import { useState, useEffect } from 'react';
import "./dummyKnight.css";
import data from "../dummyKnight.json"
import dummy from "../dummyKnight/visuals/body/dummyKnight.png"
import strike_up from "./visuals/attacks/strike-up.png"
import strike_down from "./visuals/attacks/strike-down.png"
import strike_left from "./visuals/attacks/strike-left.png"
import strike_right from "./visuals/attacks/strike-right.png"
import { MOVE_POSITION_ARENA_1_1 as MOVE_POSITION } from '../move/MOVE_POSITION_ARENA_1_1';
import { ATTACK_POSITION_ARENA_1_1 as ATTACK_POSITION} from '../attack/ATTACK_POSITION_ARENA_1_1';

const DUMMY_KNIGHT = () => {
    const [knight, setKnight] = useState(data)

    useEffect(() => {
        MOVE_POSITION() 
        ATTACK_POSITION()  
    })
    
    return (
        <div className='knight-position-arena'>
            <div id='knight-mover' className='knight-position-f3'>
                <img className='knight' src={dummy} alt={knight.name} />
                <img id='strike-up' className='knight' src={strike_up} alt={knight.name} />
                <img id='strike-down' className='knight' src={strike_down} alt={knight.name} />
                <img id='strike-left' className='knight' src={strike_left} alt={knight.name} />
                <img id='strike-right' className='knight' src={strike_right} alt={knight.name} />
            </div>
        </div>
    );
};

export { DUMMY_KNIGHT };