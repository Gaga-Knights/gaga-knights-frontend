import { useState, useEffect } from 'react';
import "./dummyKnight.css";
import data from "../dummyKnight.json"
import dummy from "../dummyKnight/visuals/body/dummyKnight.png"
import strike_up from "./visuals/attacks/strike-up.png"
import { MOVE_POSITION_ARENA_1_1 as MOVE_POSITION } from '../move/MOVE_POSITION_ARENA_1_1';
import { MOVE_POSITION_ARENA_1_1 as ATTACK_POSITION} from '../attack/ATTACK_POSITION_ARENA_1_1';

const DUMMY_KNIGHT = () => {
    const [knight, setKnight] = useState(data)

    useEffect(() => {
      MOVE_POSITION()  
    })
    useEffect(() => {
        ATTACK_POSITION()
    })
    
    return (
        <div className='knight-position-arena'>
            <div id='knight-mover' className='knight-position-f3'>
                <img className='knight' src={dummy} alt={knight.name} />
                <img id='strike-up' className='knight' src={strike_up} alt={knight.name} />
            </div>
        </div>
    );
};

export { DUMMY_KNIGHT };