import React from 'react';
import './DRAGON.css'
import Texture from './dragon.gif'

const DRAGON = () => {
    return (
        <div className='monster-position-arena'>
            <div id='monster-hitbox' className='monster-position-f3'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
        </div>
    );
};

export { DRAGON };