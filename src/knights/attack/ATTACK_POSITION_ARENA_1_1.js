let monster_hitpoints = 1000
let knight_dmg = 10

const ATTACK_POSITION_ARENA_1_1 = () => {
 
    // Knight Positions
    const knight_mover = document.querySelector("#knight-mover")
    const knight_tile = knight_mover.classList
    // Monster Positions
    const monster_hitbox = document.querySelector('#monster-hitbox')
    const monster_tile = monster_hitbox.classList
    // Arena Positions

    // Attack Selectors
    const strike_up = document.querySelector("#strike-up")
    const strike_down = document.querySelector("#strike-down")
    const strike_left = document.querySelector("#strike-left")
    const strike_right = document.querySelector("#strike-right")
    
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
                // Row F Left
                if ((knight_tile.contains(`${kp}f5`))&&(monster_tile.contains(`${mp}f4`))) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}f4`)&&monster_tile.contains(`${mp}f3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}f3`)&&monster_tile.contains(`${mp}f2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}f2`)&&monster_tile.contains(`${mp}f1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row E Left
                else if (knight_tile.contains(`${kp}e5`)&&monster_tile.contains(`${mp}e4`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e4`)&&monster_tile.contains(`${mp}e3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}e3`)&&monster_tile.contains(`${mp}e2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}e2`)&&monster_tile.contains(`${mp}e1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row D Left
                else if (knight_tile.contains(`${kp}d5`)&&monster_tile.contains(`${mp}d4`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d4`)&&monster_tile.contains(`${mp}d3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}d3`)&&monster_tile.contains(`${mp}d2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}d2`)&&monster_tile.contains(`${mp}d1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row C Left
                else if (knight_tile.contains(`${kp}c5`)&&monster_tile.contains(`${mp}c4`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c4`)&&monster_tile.contains(`${mp}c3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}c3`)&&monster_tile.contains(`${mp}c2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}c2`)&&monster_tile.contains(`${mp}c1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row B Left
                else if (knight_tile.contains(`${kp}b5`)&&monster_tile.contains(`${mp}b4`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b4`)&&monster_tile.contains(`${mp}b3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}b3`)&&monster_tile.contains(`${mp}b2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}b2`)&&monster_tile.contains(`${mp}b1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                 // Row A Left
                 else if (knight_tile.contains(`${kp}a5`)&&monster_tile.contains(`${mp}a4`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}a4`)&&monster_tile.contains(`${mp}a3`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}a3`)&&monster_tile.contains(`${mp}a2`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}a2`)&&monster_tile.contains(`${mp}a1`)) {
                    strike_left.style.display = "block"
                    setTimeout(() => {
                        strike_left.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                break;
            case "ArrowRight":
                // Row F Right
                if (knight_tile.contains(`${kp}f1`)&&monster_tile.contains(`${mp}f2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}f2`)&&monster_tile.contains(`${mp}f3`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}f3`)&&monster_tile.contains(`${mp}f4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}f4`)&&monster_tile.contains(`${mp}f5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row E Right
                else if (knight_tile.contains(`${kp}e1`)&&monster_tile.contains(`${mp}e2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}e2`)&&monster_tile.contains(`${mp}34`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}e3`)&&monster_tile.contains(`${mp}e4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}e4`)&&monster_tile.contains(`${mp}e5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row D Right
                else if (knight_tile.contains(`${kp}d1`)&&monster_tile.contains(`${mp}d2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}d2`)&&monster_tile.contains(`${mp}d3`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}d3`)&&monster_tile.contains(`${mp}d4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}d4`)&&monster_tile.contains(`${mp}d5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row C Right
                else if (knight_tile.contains(`${kp}c1`)&&monster_tile.contains(`${mp}c2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}c2`)&&monster_tile.contains(`${mp}c3`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}c3`)&&monster_tile.contains(`${mp}c4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}c4`)&&monster_tile.contains(`${mp}c5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row B Right
                else if (knight_tile.contains(`${kp}b1`)&&monster_tile.contains(`${mp}b2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}b2`)&&monster_tile.contains(`${mp}b3`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}b3`)&&monster_tile.contains(`${mp}b4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}b4`)&&monster_tile.contains(`${mp}b5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                // Row A Right
                else if (knight_tile.contains(`${kp}a1`)&&monster_tile.contains(`${mp}a2`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}a2`)&&monster_tile.contains(`${mp}a3`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}a3`)&&monster_tile.contains(`${mp}a4`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                else if (knight_tile.contains(`${kp}a4`)&&monster_tile.contains(`${mp}a5`)) {
                    strike_right.style.display = "block"
                    setTimeout(() => {
                        strike_right.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                } 
                break;
            case "ArrowUp":
                // Column 1 Up
                if (knight_tile.contains(`${kp}f1`)&&monster_tile.contains(`${mp}e1`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e1`)&&monster_tile.contains(`${mp}d1`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d1`)&&monster_tile.contains(`${mp}c1`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c1`)&&monster_tile.contains(`${mp}b1`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b1`)&&monster_tile.contains(`${mp}a1`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 2 Up
                else if (knight_tile.contains(`${kp}f2`)&&monster_tile.contains(`${mp}e2`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e2`)&&monster_tile.contains(`${mp}d2`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d2`)&&monster_tile.contains(`${mp}c2`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c2`)&&monster_tile.contains(`${mp}b2`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b2`)&&monster_tile.contains(`${mp}a2`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 3 Up
                else if (knight_tile.contains(`${kp}f3`)&&monster_tile.contains(`${mp}e3`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e3`)&&monster_tile.contains(`${mp}d3`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d3`)&&monster_tile.contains(`${mp}c3`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c3`)&&monster_tile.contains(`${mp}b3`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b3`)&&monster_tile.contains(`${mp}a3`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 4 Up
                else if (knight_tile.contains(`${kp}f4`)&&monster_tile.contains(`${mp}e4`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e4`)&&monster_tile.contains(`${mp}d4`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d4`)&&monster_tile.contains(`${mp}c4`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c4`)&&monster_tile.contains(`${mp}b4`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b4`)&&monster_tile.contains(`${mp}a4`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 5 Up
                else if (knight_tile.contains(`${kp}f5`)&&monster_tile.contains(`${mp}e5`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e5`)&&monster_tile.contains(`${mp}d5`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d5`)&&monster_tile.contains(`${mp}c5`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c5`)&&monster_tile.contains(`${mp}b5`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b5`)&&monster_tile.contains(`${mp}a5`)) {
                    strike_up.style.display = "block"
                    setTimeout(() => {
                        strike_up.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                break;
            case "ArrowDown":
                // Column 1 Down
                if (knight_tile.contains(`${kp}a1`)&&monster_tile.contains(`${mp}b1`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b1`)&&monster_tile.contains(`${mp}c1`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c1`)&&monster_tile.contains(`${mp}d1`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d1`)&&monster_tile.contains(`${mp}e1`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e1`)&&monster_tile.contains(`${mp}f1`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 2 Down
                else if (knight_tile.contains(`${kp}a2`)&&monster_tile.contains(`${mp}b2`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b2`)&&monster_tile.contains(`${mp}c2`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c2`)&&monster_tile.contains(`${mp}d2`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d2`)&&monster_tile.contains(`${mp}e2`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e2`)&&monster_tile.contains(`${mp}f2`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 3 Down
                else if (knight_tile.contains(`${kp}a3`)&&monster_tile.contains(`${mp}b3`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b3`)&&monster_tile.contains(`${mp}c3`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c3`)&&monster_tile.contains(`${mp}d3`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d3`)&&monster_tile.contains(`${mp}e3`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e3`)&&monster_tile.contains(`${mp}f3`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 4 Down
                else if (knight_tile.contains(`${kp}a4`)&&monster_tile.contains(`${mp}b4`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b4`)&&monster_tile.contains(`${mp}c4`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c4`)&&monster_tile.contains(`${mp}d4`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d4`)&&monster_tile.contains(`${mp}e4`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e4`)&&monster_tile.contains(`${mp}f4`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                // Column 5 Down
                else if (knight_tile.contains(`${kp}a5`)&&monster_tile.contains(`${mp}b5`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}b5`)&&monster_tile.contains(`${mp}c5`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}c5`)&&monster_tile.contains(`${mp}d5`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}d5`)&&monster_tile.contains(`${mp}e5`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                else if (knight_tile.contains(`${kp}e5`)&&monster_tile.contains(`${mp}f5`)) {
                    strike_down.style.display = "block"
                    setTimeout(() => {
                        strike_down.style.display = "none"
                    }, "100")
                    monster_hitpoints -= knight_dmg
                    console.log(monster_hitpoints)
                }
                break;
        }
    })
}
export { ATTACK_POSITION_ARENA_1_1 };