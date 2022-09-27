import React from 'react';
import './DRAGON.css'
import Texture from './dragon.gif'

const DRAGON = () => {
    return (
        <div className='monster-position-arena'>
            <div id='monster-mover' className='monster-position-b2'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-b3'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-b4'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-c2'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-c3'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-c4'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-d2'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-d3'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
            <div id='monster-mover' className='monster-position-d4'>
                <img className='dragon' src={Texture} alt="dragon" />
            </div>
        </div>
    );
};

export { DRAGON };