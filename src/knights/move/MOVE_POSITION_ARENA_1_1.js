const MOVE_POSITION_ARENA_1_1 = () => {
 
    // Knight Positions
    const knight_mover = document.querySelector("#knight-mover")
    const knight_tile = knight_mover.classList
    // Monster Positions
    const monster_hitbox = document.querySelector('#monster-hitbox')
    const monster_tile = monster_hitbox.classList
    // Arena Positions

    //Shorthand for 'knight-position-'
    const kp = 'knight-position-'
    // Shorthand for 'monster-position-'
    const mp = 'monster-position-'
    
    // buttons to move
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return
        }
        // eslint-disable-next-line default-case
        switch (event.code) {
            case "ArrowLeft":
                console.log(`${mp}f5`)
                // Row F Left
                if ((knight_tile.contains(`${kp}f5`))&&(!monster_tile.contains(`${mp}f4`))) {
                    knight_tile.remove(`${kp}f5`)
                    knight_tile.add(`${kp}f4`)
                }
                else if (knight_tile.contains(`${kp}f4`)&&!monster_tile.contains(`${mp}f3`)) {
                    knight_tile.remove(`${kp}f4`)
                    knight_tile.add(`${kp}f3`)
                } 
                else if (knight_tile.contains(`${kp}f3`)&&!monster_tile.contains(`${mp}f2`)) {
                    knight_tile.remove(`${kp}f3`)
                    knight_tile.add(`${kp}f2`)
                } 
                else if (knight_tile.contains(`${kp}f2`)&&!monster_tile.contains(`${mp}f1`)) {
                    knight_tile.remove(`${kp}f2`)
                    knight_tile.add(`${kp}f1`)
                } 
                // Row E Left
                else if (knight_tile.contains(`${kp}e5`)&&!monster_tile.contains(`${mp}e4`)) {
                    knight_tile.remove(`${kp}e5`)
                    knight_tile.add(`${kp}e4`)
                }
                else if (knight_tile.contains(`${kp}e4`)&&!monster_tile.contains(`${mp}e3`)) {
                    knight_tile.remove(`${kp}e4`)
                    knight_tile.add(`${kp}e3`)
                } 
                else if (knight_tile.contains(`${kp}e3`)&&!monster_tile.contains(`${mp}e2`)) {
                    knight_tile.remove(`${kp}e3`)
                    knight_tile.add(`${kp}e2`)
                } 
                else if (knight_tile.contains(`${kp}e2`)&&!monster_tile.contains(`${mp}e1`)) {
                    knight_tile.remove(`${kp}e2`)
                    knight_tile.add(`${kp}e1`)
                } 
                // Row D Left
                else if (knight_tile.contains(`${kp}d5`)&&!monster_tile.contains(`${mp}d4`)) {
                    knight_tile.remove(`${kp}d5`)
                    knight_tile.add(`${kp}d4`)
                }
                else if (knight_tile.contains(`${kp}d4`)&&!monster_tile.contains(`${mp}d3`)) {
                    knight_tile.remove(`${kp}d4`)
                    knight_tile.add(`${kp}d3`)
                } 
                else if (knight_tile.contains(`${kp}d3`)&&!monster_tile.contains(`${mp}d2`)) {
                    knight_tile.remove(`${kp}d3`)
                    knight_tile.add(`${kp}d2`)
                } 
                else if (knight_tile.contains(`${kp}d2`)&&!monster_tile.contains(`${mp}d1`)) {
                    knight_tile.remove(`${kp}d2`)
                    knight_tile.add(`${kp}d1`)
                } 
                // Row C Left
                else if (knight_tile.contains(`${kp}c5`)&&!monster_tile.contains(`${mp}c4`)) {
                    knight_tile.remove(`${kp}c5`)
                    knight_tile.add(`${kp}c4`)
                }
                else if (knight_tile.contains(`${kp}c4`)&&!monster_tile.contains(`${mp}c3`)) {
                    knight_tile.remove(`${kp}c4`)
                    knight_tile.add(`${kp}c3`)
                } 
                else if (knight_tile.contains(`${kp}c3`)&&!monster_tile.contains(`${mp}c2`)) {
                    knight_tile.remove(`${kp}c3`)
                    knight_tile.add(`${kp}c2`)
                } 
                else if (knight_tile.contains(`${kp}c2`)&&!monster_tile.contains(`${mp}c1`)) {
                    knight_tile.remove(`${kp}c2`)
                    knight_tile.add(`${kp}c1`)
                } 
                // Row B Left
                else if (knight_tile.contains(`${kp}b5`)&&!monster_tile.contains(`${mp}b4`)) {
                    knight_tile.remove(`${kp}b5`)
                    knight_tile.add(`${kp}b4`)
                }
                else if (knight_tile.contains(`${kp}b4`)&&!monster_tile.contains(`${mp}b3`)) {
                    knight_tile.remove(`${kp}b4`)
                    knight_tile.add(`${kp}b3`)
                } 
                else if (knight_tile.contains(`${kp}b3`)&&!monster_tile.contains(`${mp}b2`)) {
                    knight_tile.remove(`${kp}b3`)
                    knight_tile.add(`${kp}b2`)
                } 
                else if (knight_tile.contains(`${kp}b2`)&&!monster_tile.contains(`${mp}b1`)) {
                    knight_tile.remove(`${kp}b2`)
                    knight_tile.add(`${kp}b1`)
                } 
                 // Row A Left
                 else if (knight_tile.contains(`${kp}a5`)&&!monster_tile.contains(`${mp}a4`)) {
                    knight_tile.remove(`${kp}a5`)
                    knight_tile.add(`${kp}a4`)
                }
                else if (knight_tile.contains(`${kp}a4`)&&!monster_tile.contains(`${mp}a3`)) {
                    knight_tile.remove(`${kp}a4`)
                    knight_tile.add(`${kp}a3`)
                } 
                else if (knight_tile.contains(`${kp}a3`)&&!monster_tile.contains(`${mp}a2`)) {
                    knight_tile.remove(`${kp}a3`)
                    knight_tile.add(`${kp}a2`)
                } 
                else if (knight_tile.contains(`${kp}a2`)&&!monster_tile.contains(`${mp}a1`)) {
                    knight_tile.remove(`${kp}a2`)
                    knight_tile.add(`${kp}a1`)
                } 
                break;
            case "ArrowRight":
                // Row F Right
                if (knight_tile.contains(`${kp}f1`)&&!monster_tile.contains(`${mp}f2`)) {
                    knight_tile.remove(`${kp}f1`)
                    knight_tile.add(`${kp}f2`)
                } 
                else if (knight_tile.contains(`${kp}f2`)&&!monster_tile.contains(`${mp}f3`)) {
                    knight_tile.remove(`${kp}f2`)
                    knight_tile.add(`${kp}f3`)
                } 
                else if (knight_tile.contains(`${kp}f3`)&&!monster_tile.contains(`${mp}f4`)) {
                    knight_tile.remove(`${kp}f3`)
                    knight_tile.add(`${kp}f4`)
                } 
                else if (knight_tile.contains(`${kp}f4`)&&!monster_tile.contains(`${mp}f5`)) {
                    knight_tile.remove(`${kp}f4`)
                    knight_tile.add(`${kp}f5`)
                } 
                // Row E Right
                else if (knight_tile.contains(`${kp}e1`)&&!monster_tile.contains(`${mp}e2`)) {
                    knight_tile.remove(`${kp}e1`)
                    knight_tile.add(`${kp}e2`)
                } 
                else if (knight_tile.contains(`${kp}e2`)&&!monster_tile.contains(`${mp}34`)) {
                    knight_tile.remove(`${kp}e2`)
                    knight_tile.add(`${kp}e3`)
                } 
                else if (knight_tile.contains(`${kp}e3`)&&!monster_tile.contains(`${mp}e4`)) {
                    knight_tile.remove(`${kp}e3`)
                    knight_tile.add(`${kp}e4`)
                } 
                else if (knight_tile.contains(`${kp}e4`)&&!monster_tile.contains(`${mp}e5`)) {
                    knight_tile.remove(`${kp}e4`)
                    knight_tile.add(`${kp}e5`)
                } 
                // Row D Right
                else if (knight_tile.contains(`${kp}d1`)&&!monster_tile.contains(`${mp}d2`)) {
                    knight_tile.remove(`${kp}d1`)
                    knight_tile.add(`${kp}d2`)
                } 
                else if (knight_tile.contains(`${kp}d2`)&&!monster_tile.contains(`${mp}d3`)) {
                    knight_tile.remove(`${kp}d2`)
                    knight_tile.add(`${kp}d3`)
                } 
                else if (knight_tile.contains(`${kp}d3`)&&!monster_tile.contains(`${mp}d4`)) {
                    knight_tile.remove(`${kp}d3`)
                    knight_tile.add(`${kp}d4`)
                } 
                else if (knight_tile.contains(`${kp}d4`)&&!monster_tile.contains(`${mp}d5`)) {
                    knight_tile.remove(`${kp}d4`)
                    knight_tile.add(`${kp}d5`)
                } 
                // Row C Right
                else if (knight_tile.contains(`${kp}c1`)&&!monster_tile.contains(`${mp}c2`)) {
                    knight_tile.remove(`${kp}c1`)
                    knight_tile.add(`${kp}c2`)
                } 
                else if (knight_tile.contains(`${kp}c2`)&&!monster_tile.contains(`${mp}c3`)) {
                    knight_tile.remove(`${kp}c2`)
                    knight_tile.add(`${kp}c3`)
                } 
                else if (knight_tile.contains(`${kp}c3`)&&!monster_tile.contains(`${mp}c4`)) {
                    knight_tile.remove(`${kp}c3`)
                    knight_tile.add(`${kp}c4`)
                } 
                else if (knight_tile.contains(`${kp}c4`)&&!monster_tile.contains(`${mp}c5`)) {
                    knight_tile.remove(`${kp}c4`)
                    knight_tile.add(`${kp}c5`)
                } 
                // Row B Right
                else if (knight_tile.contains(`${kp}b1`)&&!monster_tile.contains(`${mp}b2`)) {
                    knight_tile.remove(`${kp}b1`)
                    knight_tile.add(`${kp}b2`)
                } 
                else if (knight_tile.contains(`${kp}b2`)&&!monster_tile.contains(`${mp}b3`)) {
                    knight_tile.remove(`${kp}b2`)
                    knight_tile.add(`${kp}b3`)
                } 
                else if (knight_tile.contains(`${kp}b3`)&&!monster_tile.contains(`${mp}b4`)) {
                    knight_tile.remove(`${kp}b3`)
                    knight_tile.add(`${kp}b4`)
                } 
                else if (knight_tile.contains(`${kp}b4`)&&!monster_tile.contains(`${mp}b5`)) {
                    knight_tile.remove(`${kp}b4`)
                    knight_tile.add(`${kp}b5`)
                } 
                // Row A Right
                else if (knight_tile.contains(`${kp}a1`)&&!monster_tile.contains(`${mp}a2`)) {
                    knight_tile.remove(`${kp}a1`)
                    knight_tile.add(`${kp}a2`)
                } 
                else if (knight_tile.contains(`${kp}a2`)&&!monster_tile.contains(`${mp}a3`)) {
                    knight_tile.remove(`${kp}a2`)
                    knight_tile.add(`${kp}a3`)
                } 
                else if (knight_tile.contains(`${kp}a3`)&&!monster_tile.contains(`${mp}a4`)) {
                    knight_tile.remove(`${kp}a3`)
                    knight_tile.add(`${kp}a4`)
                } 
                else if (knight_tile.contains(`${kp}a4`)&&!monster_tile.contains(`${mp}a5`)) {
                    knight_tile.remove(`${kp}a4`)
                    knight_tile.add(`${kp}a5`)
                } 
                break;
            case "ArrowUp":
                // Column 1 Up
                if (knight_tile.contains(`${kp}f1`)&&!monster_tile.contains(`${mp}e1`)) {
                    knight_tile.remove(`${kp}f1`)
                    knight_tile.add(`${kp}e1`)
                }
                else if (knight_tile.contains(`${kp}e1`)&&!monster_tile.contains(`${mp}d1`)) {
                    knight_tile.remove(`${kp}e1`)
                    knight_tile.add(`${kp}d1`)
                }
                else if (knight_tile.contains(`${kp}d1`)&&!monster_tile.contains(`${mp}c1`)) {
                    knight_tile.remove(`${kp}d1`)
                    knight_tile.add(`${kp}c1`)
                }
                else if (knight_tile.contains(`${kp}c1`)&&!monster_tile.contains(`${mp}b1`)) {
                    knight_tile.remove(`${kp}c1`)
                    knight_tile.add(`${kp}b1`)
                }
                else if (knight_tile.contains(`${kp}b1`)&&!monster_tile.contains(`${mp}a1`)) {
                    knight_tile.remove(`${kp}b1`)
                    knight_tile.add(`${kp}a1`)
                }
                // Column 2 Up
                else if (knight_tile.contains(`${kp}f2`)&&!monster_tile.contains(`${mp}e2`)) {
                    knight_tile.remove(`${kp}f2`)
                    knight_tile.add(`${kp}e2`)
                }
                else if (knight_tile.contains(`${kp}e2`)&&!monster_tile.contains(`${mp}d2`)) {
                    knight_tile.remove(`${kp}e2`)
                    knight_tile.add(`${kp}d2`)
                }
                else if (knight_tile.contains(`${kp}d2`)&&!monster_tile.contains(`${mp}c2`)) {
                    knight_tile.remove(`${kp}d2`)
                    knight_tile.add(`${kp}c2`)
                }
                else if (knight_tile.contains(`${kp}c2`)&&!monster_tile.contains(`${mp}b2`)) {
                    knight_tile.remove(`${kp}c2`)
                    knight_tile.add(`${kp}b2`)
                }
                else if (knight_tile.contains(`${kp}b2`)&&!monster_tile.contains(`${mp}a2`)) {
                    knight_tile.remove(`${kp}b2`)
                    knight_tile.add(`${kp}a2`)
                }
                // Column 3 Up
                else if (knight_tile.contains(`${kp}f3`)&&!monster_tile.contains(`${mp}e3`)) {
                    knight_tile.remove(`${kp}f3`)
                    knight_tile.add(`${kp}e3`)
                }
                else if (knight_tile.contains(`${kp}e3`)&&!monster_tile.contains(`${mp}d3`)) {
                    knight_tile.remove(`${kp}e3`)
                    knight_tile.add(`${kp}d3`)
                }
                else if (knight_tile.contains(`${kp}d3`)&&!monster_tile.contains(`${mp}c3`)) {
                    knight_tile.remove(`${kp}d3`)
                    knight_tile.add(`${kp}c3`)
                }
                else if (knight_tile.contains(`${kp}c3`)&&!monster_tile.contains(`${mp}b3`)) {
                    knight_tile.remove(`${kp}c3`)
                    knight_tile.add(`${kp}b3`)
                }
                else if (knight_tile.contains(`${kp}b3`)&&!monster_tile.contains(`${mp}a3`)) {
                    knight_tile.remove(`${kp}b3`)
                    knight_tile.add(`${kp}a3`)
                }
                // Column 4 Up
                else if (knight_tile.contains(`${kp}f4`)&&!monster_tile.contains(`${mp}e4`)) {
                    knight_tile.remove(`${kp}f4`)
                    knight_tile.add(`${kp}e4`)
                }
                else if (knight_tile.contains(`${kp}e4`)&&!monster_tile.contains(`${mp}d4`)) {
                    knight_tile.remove(`${kp}e4`)
                    knight_tile.add(`${kp}d4`)
                }
                else if (knight_tile.contains(`${kp}d4`)&&!monster_tile.contains(`${mp}c4`)) {
                    knight_tile.remove(`${kp}d4`)
                    knight_tile.add(`${kp}c4`)
                }
                else if (knight_tile.contains(`${kp}c4`)&&!monster_tile.contains(`${mp}b4`)) {
                    knight_tile.remove(`${kp}c4`)
                    knight_tile.add(`${kp}b4`)
                }
                else if (knight_tile.contains(`${kp}b4`)&&!monster_tile.contains(`${mp}a4`)) {
                    knight_tile.remove(`${kp}b4`)
                    knight_tile.add(`${kp}a4`)
                }
                // Column 5 Up
                else if (knight_tile.contains(`${kp}f5`)&&!monster_tile.contains(`${mp}e5`)) {
                    knight_tile.remove(`${kp}f5`)
                    knight_tile.add(`${kp}e5`)
                }
                else if (knight_tile.contains(`${kp}e5`)&&!monster_tile.contains(`${mp}d5`)) {
                    knight_tile.remove(`${kp}e5`)
                    knight_tile.add(`${kp}d5`)
                }
                else if (knight_tile.contains(`${kp}d5`)&&!monster_tile.contains(`${mp}c5`)) {
                    knight_tile.remove(`${kp}d5`)
                    knight_tile.add(`${kp}c5`)
                }
                else if (knight_tile.contains(`${kp}c5`)&&!monster_tile.contains(`${mp}b5`)) {
                    knight_tile.remove(`${kp}c5`)
                    knight_tile.add(`${kp}b5`)
                }
                else if (knight_tile.contains(`${kp}b5`)&&!monster_tile.contains(`${mp}a5`)) {
                    knight_tile.remove(`${kp}b5`)
                    knight_tile.add(`${kp}a5`)
                }
                break;
            case "ArrowDown":
                // Column 1 Down
                if (knight_tile.contains(`${kp}a1`)&&!monster_tile.contains(`${mp}b1`)) {
                    knight_tile.remove(`${kp}a1`)
                    knight_tile.add(`${kp}b1`)
                }
                else if (knight_tile.contains(`${kp}b1`)&&!monster_tile.contains(`${mp}c1`)) {
                    knight_tile.remove(`${kp}b1`)
                    knight_tile.add(`${kp}c1`)
                }
                else if (knight_tile.contains(`${kp}c1`)&&!monster_tile.contains(`${mp}d1`)) {
                    knight_tile.remove(`${kp}c1`)
                    knight_tile.add(`${kp}d1`)
                }
                else if (knight_tile.contains(`${kp}d1`)&&!monster_tile.contains(`${mp}e1`)) {
                    knight_tile.remove(`${kp}d1`)
                    knight_tile.add(`${kp}e1`)
                }
                else if (knight_tile.contains(`${kp}e1`)&&!monster_tile.contains(`${mp}f1`)) {
                    knight_tile.remove(`${kp}e1`)
                    knight_tile.add(`${kp}f1`)
                }
                // Column 2 Down
                else if (knight_tile.contains(`${kp}a2`)&&!monster_tile.contains(`${mp}b2`)) {
                    knight_tile.remove(`${kp}a2`)
                    knight_tile.add(`${kp}b2`)
                }
                else if (knight_tile.contains(`${kp}b2`)&&!monster_tile.contains(`${mp}c2`)) {
                    knight_tile.remove(`${kp}b2`)
                    knight_tile.add(`${kp}c2`)
                }
                else if (knight_tile.contains(`${kp}c2`)&&!monster_tile.contains(`${mp}d2`)) {
                    knight_tile.remove(`${kp}c2`)
                    knight_tile.add(`${kp}d2`)
                }
                else if (knight_tile.contains(`${kp}d2`)&&!monster_tile.contains(`${mp}e2`)) {
                    knight_tile.remove(`${kp}d2`)
                    knight_tile.add(`${kp}e2`)
                }
                else if (knight_tile.contains(`${kp}e2`)&&!monster_tile.contains(`${mp}f2`)) {
                    knight_tile.remove(`${kp}e2`)
                    knight_tile.add(`${kp}f2`)
                }
                // Column 3 Down
                else if (knight_tile.contains(`${kp}a3`)&&!monster_tile.contains(`${mp}b3`)) {
                    knight_tile.remove(`${kp}a3`)
                    knight_tile.add(`${kp}b3`)
                }
                else if (knight_tile.contains(`${kp}b3`)&&!monster_tile.contains(`${mp}c3`)) {
                    knight_tile.remove(`${kp}b3`)
                    knight_tile.add(`${kp}c3`)
                }
                else if (knight_tile.contains(`${kp}c3`)&&!monster_tile.contains(`${mp}d3`)) {
                    knight_tile.remove(`${kp}c3`)
                    knight_tile.add(`${kp}d3`)
                }
                else if (knight_tile.contains(`${kp}d3`)&&!monster_tile.contains(`${mp}e3`)) {
                    knight_tile.remove(`${kp}d3`)
                    knight_tile.add(`${kp}e3`)
                }
                else if (knight_tile.contains(`${kp}e3`)&&!monster_tile.contains(`${mp}f3`)) {
                    knight_tile.remove(`${kp}e3`)
                    knight_tile.add(`${kp}f3`)
                }
                // Column 4 Down
                else if (knight_tile.contains(`${kp}a4`)&&!monster_tile.contains(`${mp}b4`)) {
                    knight_tile.remove(`${kp}a4`)
                    knight_tile.add(`${kp}b4`)
                }
                else if (knight_tile.contains(`${kp}b4`)&&!monster_tile.contains(`${mp}c4`)) {
                    knight_tile.remove(`${kp}b4`)
                    knight_tile.add(`${kp}c4`)
                }
                else if (knight_tile.contains(`${kp}c4`)&&!monster_tile.contains(`${mp}d4`)) {
                    knight_tile.remove(`${kp}c4`)
                    knight_tile.add(`${kp}d4`)
                }
                else if (knight_tile.contains(`${kp}d4`)&&!monster_tile.contains(`${mp}e4`)) {
                    knight_tile.remove(`${kp}d4`)
                    knight_tile.add(`${kp}e4`)
                }
                else if (knight_tile.contains(`${kp}e4`)&&!monster_tile.contains(`${mp}f4`)) {
                    knight_tile.remove(`${kp}e4`)
                    knight_tile.add(`${kp}f4`)
                }
                // Column 5 Down
                else if (knight_tile.contains(`${kp}a5`)&&!monster_tile.contains(`${mp}b5`)) {
                    knight_tile.remove(`${kp}a5`)
                    knight_tile.add(`${kp}b5`)
                }
                else if (knight_tile.contains(`${kp}b5`)&&!monster_tile.contains(`${mp}c5`)) {
                    knight_tile.remove(`${kp}b5`)
                    knight_tile.add(`${kp}c5`)
                }
                else if (knight_tile.contains(`${kp}c5`)&&!monster_tile.contains(`${mp}d5`)) {
                    knight_tile.remove(`${kp}c5`)
                    knight_tile.add(`${kp}d5`)
                }
                else if (knight_tile.contains(`${kp}d5`)&&!monster_tile.contains(`${mp}e5`)) {
                    knight_tile.remove(`${kp}d5`)
                    knight_tile.add(`${kp}e5`)
                }
                else if (knight_tile.contains(`${kp}e5`)&&!monster_tile.contains(`${mp}f5`)) {
                    knight_tile.remove(`${kp}e5`)
                    knight_tile.add(`${kp}f5`)
                }
                break;
        }
    })
}
export { MOVE_POSITION_ARENA_1_1 };