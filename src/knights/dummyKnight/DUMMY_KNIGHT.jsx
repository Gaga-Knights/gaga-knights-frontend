import { useState, useEffect } from 'react';
import "./dummyKnight.css";
import data from "../dummyKnight.json"
import image from "./dummyKnight.png"
import { MOVE_POSITION_ARENA_1_1 as MOVE_POSITION } from '../move/MOVE_POSITION_ARENA_1_1';

const DUMMY_KNIGHT = () => {
    const [knight, setKnight] = useState(data)

    useEffect(() => {
      MOVE_POSITION()  
    })
    
    return (
        <div className='knight-position-arena'>
            <div id='knight-mover' className='knight-position-f5'>
                <img className='knight' src={image} alt={knight.name} />
            </div>
        </div>
    );
};

export { DUMMY_KNIGHT };