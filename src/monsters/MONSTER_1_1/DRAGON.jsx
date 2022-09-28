import React from 'react';
import './DRAGON.css'
import Texture from './dragon.gif'

const DRAGON = () => {
    return (
        <div className='monster-position-arena'>
            <div id='monster-hitbox' className='monster-position-b2 monster-position-b3 monster-position-b4 monster-position-c2 monster-position-c3 monster-position-c4 monster-position-d2 monster-position-d3 monster-position-d4'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
        </div>
    );
};

export { DRAGON };