import React from 'react';
import "./TILE_OPEN_BRICK_1.css";
import Texture from "./brick.png";

const TILE_OPEN_BRICK_1 = () => {
    return (
        <img src={Texture} alt='brick' className='brick' />
    );
};

export { TILE_OPEN_BRICK_1 };
