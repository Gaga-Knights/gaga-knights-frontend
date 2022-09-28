import React from 'react';
import './FROST_GIANT.css'
import Texture from './frost_giant.png'

const FROST_GIANT = () => {
    return (
        <div className='monster-position-arena'>
            <div id='monster-hitbox' className='monster-position-b2 monster-position-b3 monster-position-b4 monster-position-c2 monster-position-c3 monster-position-c4 monster-position-d2 monster-position-d3 monster-position-d4'>
                <img className='frost-giant' src={Texture} alt="frost-giant" />
            </div>
        </div>
    );
};

export { FROST_GIANT };