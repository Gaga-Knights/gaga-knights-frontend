import React from 'react';
import './ARENA_1_1.css';
import { TILE_OPEN_BRICK_1 as Brick } from '../../tiles/TILE_OPEN_BRICK_1/TILE_OPEN_BRICK_1';
import { DUMMY_KNIGHT as Knight } from '../../../knights/DUMMY_KNIGHT';

const ARENA_1_1 = () => {
    return (
        <>
            <div className="arena">
                <Brick className="tile1"> </Brick>
                <Brick className="tile2"> </Brick>
                <Brick className="tile3"> </Brick>
                <Brick className="tile4"> </Brick>
                <Brick className="tile5"> </Brick>
                <Brick className="tile6"> </Brick>
                <Brick className="tile7"> </Brick>
                <Brick className="tile8"> </Brick>
                <Brick className="tile9"> </Brick>
                <Brick className="tile10"> </Brick>
                <Brick className="tile11"> </Brick>
                <Brick className="tile12"> </Brick>
                <Brick className="tile13"> </Brick>
                <Brick className="tile14"> </Brick>
                <Brick className="tile15"> </Brick>
                <Brick className="tile16"> </Brick>
                <Brick className="tile17"> </Brick>
                <Brick className="tile18"> </Brick>
                <Brick className="tile19"> </Brick>
                <Brick className="tile20"> </Brick>
                <Brick className="tile21"> </Brick>
                <Brick className="tile22"> </Brick>
                <Brick className="tile23"> </Brick>
                <Brick className="tile24"> </Brick>
                <Brick className="tile25"> </Brick>
                <Brick className="tile26"> </Brick>
                <Brick className="tile27"> </Brick>
                <Brick className="tile28"> </Brick>
                <Brick className="tile29"> </Brick>
                <Brick className="tile30"> </Brick>
            </div>
            <Knight></Knight>
            </>
    );
};

export default ARENA_1_1;