const MOVE_POSITION = () => {
 
    // Knight Positions
    const knight_mover = document.querySelector("#knight-mover")
    // Monster Positions
    
    // Arena Positions
    
    // buttons to move
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return
        }
        // eslint-disable-next-line default-case
        switch (event.code) {
            case "ArrowLeft":
                // Row F Left
                if (knight_mover.classList.contains('knight-position-f5')) {
                    knight_mover.classList.remove('knight-position-f5')
                    knight_mover.classList.add('knight-position-f4')
                }
                else if (knight_mover.classList.contains('knight-position-f4')) {
                    knight_mover.classList.remove('knight-position-f4')
                    knight_mover.classList.add('knight-position-f3')
                } 
                else if (knight_mover.classList.contains('knight-position-f3')) {
                    knight_mover.classList.remove('knight-position-f3')
                    knight_mover.classList.add('knight-position-f2')
                } 
                else if (knight_mover.classList.contains('knight-position-f2')) {
                    knight_mover.classList.remove('knight-position-f2')
                    knight_mover.classList.add('knight-position-f1')
                } 
                // Row E Left
                else if (knight_mover.classList.contains('knight-position-e5')) {
                    knight_mover.classList.remove('knight-position-e5')
                    knight_mover.classList.add('knight-position-e4')
                }
                else if (knight_mover.classList.contains('knight-position-e4')) {
                    knight_mover.classList.remove('knight-position-e4')
                    knight_mover.classList.add('knight-position-e3')
                } 
                else if (knight_mover.classList.contains('knight-position-e3')) {
                    knight_mover.classList.remove('knight-position-e3')
                    knight_mover.classList.add('knight-position-e2')
                } 
                else if (knight_mover.classList.contains('knight-position-e2')) {
                    knight_mover.classList.remove('knight-position-e2')
                    knight_mover.classList.add('knight-position-e1')
                } 
                // Row D Left
                else if (knight_mover.classList.contains('knight-position-d5')) {
                    knight_mover.classList.remove('knight-position-d5')
                    knight_mover.classList.add('knight-position-d4')
                }
                else if (knight_mover.classList.contains('knight-position-d4')) {
                    knight_mover.classList.remove('knight-position-d4')
                    knight_mover.classList.add('knight-position-d3')
                } 
                else if (knight_mover.classList.contains('knight-position-d3')) {
                    knight_mover.classList.remove('knight-position-d3')
                    knight_mover.classList.add('knight-position-d2')
                } 
                else if (knight_mover.classList.contains('knight-position-d2')) {
                    knight_mover.classList.remove('knight-position-d2')
                    knight_mover.classList.add('knight-position-d1')
                } 
                // Row C Left
                else if (knight_mover.classList.contains('knight-position-c5')) {
                    knight_mover.classList.remove('knight-position-c5')
                    knight_mover.classList.add('knight-position-c4')
                }
                else if (knight_mover.classList.contains('knight-position-c4')) {
                    knight_mover.classList.remove('knight-position-c4')
                    knight_mover.classList.add('knight-position-c3')
                } 
                else if (knight_mover.classList.contains('knight-position-c3')) {
                    knight_mover.classList.remove('knight-position-c3')
                    knight_mover.classList.add('knight-position-c2')
                } 
                else if (knight_mover.classList.contains('knight-position-c2')) {
                    knight_mover.classList.remove('knight-position-c2')
                    knight_mover.classList.add('knight-position-c1')
                } 
                // Row B Left
                else if (knight_mover.classList.contains('knight-position-b5')) {
                    knight_mover.classList.remove('knight-position-b5')
                    knight_mover.classList.add('knight-position-b4')
                }
                else if (knight_mover.classList.contains('knight-position-b4')) {
                    knight_mover.classList.remove('knight-position-b4')
                    knight_mover.classList.add('knight-position-b3')
                } 
                else if (knight_mover.classList.contains('knight-position-b3')) {
                    knight_mover.classList.remove('knight-position-b3')
                    knight_mover.classList.add('knight-position-b2')
                } 
                else if (knight_mover.classList.contains('knight-position-b2')) {
                    knight_mover.classList.remove('knight-position-b2')
                    knight_mover.classList.add('knight-position-b1')
                } 
                 // Row A Left
                 else if (knight_mover.classList.contains('knight-position-a5')) {
                    knight_mover.classList.remove('knight-position-a5')
                    knight_mover.classList.add('knight-position-a4')
                }
                else if (knight_mover.classList.contains('knight-position-a4')) {
                    knight_mover.classList.remove('knight-position-a4')
                    knight_mover.classList.add('knight-position-a3')
                } 
                else if (knight_mover.classList.contains('knight-position-a3')) {
                    knight_mover.classList.remove('knight-position-a3')
                    knight_mover.classList.add('knight-position-a2')
                } 
                else if (knight_mover.classList.contains('knight-position-a2')) {
                    knight_mover.classList.remove('knight-position-a2')
                    knight_mover.classList.add('knight-position-a1')
                } 
                break;
            case "ArrowRight":
                // Row F Right
                if (knight_mover.classList.contains('knight-position-f1')) {
                    knight_mover.classList.remove('knight-position-f1')
                    knight_mover.classList.add('knight-position-f2')
                } 
                else if (knight_mover.classList.contains('knight-position-f2')) {
                    knight_mover.classList.remove('knight-position-f2')
                    knight_mover.classList.add('knight-position-f3')
                } 
                else if (knight_mover.classList.contains('knight-position-f3')) {
                    knight_mover.classList.remove('knight-position-f3')
                    knight_mover.classList.add('knight-position-f4')
                } 
                else if (knight_mover.classList.contains('knight-position-f4')) {
                    knight_mover.classList.remove('knight-position-f4')
                    knight_mover.classList.add('knight-position-f5')
                } 
                // Row E Right
                else if (knight_mover.classList.contains('knight-position-e1')) {
                    knight_mover.classList.remove('knight-position-e1')
                    knight_mover.classList.add('knight-position-e2')
                } 
                else if (knight_mover.classList.contains('knight-position-e2')) {
                    knight_mover.classList.remove('knight-position-e2')
                    knight_mover.classList.add('knight-position-e3')
                } 
                else if (knight_mover.classList.contains('knight-position-e3')) {
                    knight_mover.classList.remove('knight-position-e3')
                    knight_mover.classList.add('knight-position-e4')
                } 
                else if (knight_mover.classList.contains('knight-position-e4')) {
                    knight_mover.classList.remove('knight-position-e4')
                    knight_mover.classList.add('knight-position-e5')
                } 
                // Row D Right
                else if (knight_mover.classList.contains('knight-position-d1')) {
                    knight_mover.classList.remove('knight-position-d1')
                    knight_mover.classList.add('knight-position-d2')
                } 
                else if (knight_mover.classList.contains('knight-position-d2')) {
                    knight_mover.classList.remove('knight-position-d2')
                    knight_mover.classList.add('knight-position-d3')
                } 
                else if (knight_mover.classList.contains('knight-position-d3')) {
                    knight_mover.classList.remove('knight-position-d3')
                    knight_mover.classList.add('knight-position-d4')
                } 
                else if (knight_mover.classList.contains('knight-position-d4')) {
                    knight_mover.classList.remove('knight-position-d4')
                    knight_mover.classList.add('knight-position-d5')
                } 
                // Row C Right
                else if (knight_mover.classList.contains('knight-position-c1')) {
                    knight_mover.classList.remove('knight-position-c1')
                    knight_mover.classList.add('knight-position-c2')
                } 
                else if (knight_mover.classList.contains('knight-position-c2')) {
                    knight_mover.classList.remove('knight-position-c2')
                    knight_mover.classList.add('knight-position-c3')
                } 
                else if (knight_mover.classList.contains('knight-position-c3')) {
                    knight_mover.classList.remove('knight-position-c3')
                    knight_mover.classList.add('knight-position-c4')
                } 
                else if (knight_mover.classList.contains('knight-position-c4')) {
                    knight_mover.classList.remove('knight-position-c4')
                    knight_mover.classList.add('knight-position-c5')
                } 
                // Row B Right
                else if (knight_mover.classList.contains('knight-position-b1')) {
                    knight_mover.classList.remove('knight-position-b1')
                    knight_mover.classList.add('knight-position-b2')
                } 
                else if (knight_mover.classList.contains('knight-position-b2')) {
                    knight_mover.classList.remove('knight-position-b2')
                    knight_mover.classList.add('knight-position-b3')
                } 
                else if (knight_mover.classList.contains('knight-position-b3')) {
                    knight_mover.classList.remove('knight-position-b3')
                    knight_mover.classList.add('knight-position-b4')
                } 
                else if (knight_mover.classList.contains('knight-position-b4')) {
                    knight_mover.classList.remove('knight-position-b4')
                    knight_mover.classList.add('knight-position-b5')
                } 
                // Row A Right
                else if (knight_mover.classList.contains('knight-position-a1')) {
                    knight_mover.classList.remove('knight-position-a1')
                    knight_mover.classList.add('knight-position-a2')
                } 
                else if (knight_mover.classList.contains('knight-position-a2')) {
                    knight_mover.classList.remove('knight-position-a2')
                    knight_mover.classList.add('knight-position-a3')
                } 
                else if (knight_mover.classList.contains('knight-position-a3')) {
                    knight_mover.classList.remove('knight-position-a3')
                    knight_mover.classList.add('knight-position-a4')
                } 
                else if (knight_mover.classList.contains('knight-position-a4')) {
                    knight_mover.classList.remove('knight-position-a4')
                    knight_mover.classList.add('knight-position-a5')
                } 
                break;
            case "ArrowUp":
                // Column 1 Up
                if (knight_mover.classList.contains('knight-position-f1')) {
                    knight_mover.classList.remove('knight-position-f1')
                    knight_mover.classList.add('knight-position-e1')
                }
                else if (knight_mover.classList.contains('knight-position-e1')) {
                    knight_mover.classList.remove('knight-position-e1')
                    knight_mover.classList.add('knight-position-d1')
                }
                else if (knight_mover.classList.contains('knight-position-d1')) {
                    knight_mover.classList.remove('knight-position-d1')
                    knight_mover.classList.add('knight-position-c1')
                }
                else if (knight_mover.classList.contains('knight-position-c1')) {
                    knight_mover.classList.remove('knight-position-c1')
                    knight_mover.classList.add('knight-position-b1')
                }
                else if (knight_mover.classList.contains('knight-position-b1')) {
                    knight_mover.classList.remove('knight-position-b1')
                    knight_mover.classList.add('knight-position-a1')
                }
                // Column 2 Up
                else if (knight_mover.classList.contains('knight-position-f2')) {
                    knight_mover.classList.remove('knight-position-f2')
                    knight_mover.classList.add('knight-position-e2')
                }
                else if (knight_mover.classList.contains('knight-position-e2')) {
                    knight_mover.classList.remove('knight-position-e2')
                    knight_mover.classList.add('knight-position-d2')
                }
                else if (knight_mover.classList.contains('knight-position-d2')) {
                    knight_mover.classList.remove('knight-position-d2')
                    knight_mover.classList.add('knight-position-c2')
                }
                else if (knight_mover.classList.contains('knight-position-c2')) {
                    knight_mover.classList.remove('knight-position-c2')
                    knight_mover.classList.add('knight-position-b2')
                }
                else if (knight_mover.classList.contains('knight-position-b2')) {
                    knight_mover.classList.remove('knight-position-b2')
                    knight_mover.classList.add('knight-position-a2')
                }
                // Column 3 Up
                else if (knight_mover.classList.contains('knight-position-f3')) {
                    knight_mover.classList.remove('knight-position-f3')
                    knight_mover.classList.add('knight-position-e3')
                }
                else if (knight_mover.classList.contains('knight-position-e3')) {
                    knight_mover.classList.remove('knight-position-e3')
                    knight_mover.classList.add('knight-position-d3')
                }
                else if (knight_mover.classList.contains('knight-position-d3')) {
                    knight_mover.classList.remove('knight-position-d3')
                    knight_mover.classList.add('knight-position-c3')
                }
                else if (knight_mover.classList.contains('knight-position-c3')) {
                    knight_mover.classList.remove('knight-position-c3')
                    knight_mover.classList.add('knight-position-b3')
                }
                else if (knight_mover.classList.contains('knight-position-b3')) {
                    knight_mover.classList.remove('knight-position-b3')
                    knight_mover.classList.add('knight-position-a3')
                }
                // Column 4 Up
                else if (knight_mover.classList.contains('knight-position-f4')) {
                    knight_mover.classList.remove('knight-position-f4')
                    knight_mover.classList.add('knight-position-e4')
                }
                else if (knight_mover.classList.contains('knight-position-e4')) {
                    knight_mover.classList.remove('knight-position-e4')
                    knight_mover.classList.add('knight-position-d4')
                }
                else if (knight_mover.classList.contains('knight-position-d4')) {
                    knight_mover.classList.remove('knight-position-d4')
                    knight_mover.classList.add('knight-position-c4')
                }
                else if (knight_mover.classList.contains('knight-position-c4')) {
                    knight_mover.classList.remove('knight-position-c4')
                    knight_mover.classList.add('knight-position-b4')
                }
                else if (knight_mover.classList.contains('knight-position-b4')) {
                    knight_mover.classList.remove('knight-position-b4')
                    knight_mover.classList.add('knight-position-a4')
                }
                // Column 5 Up
                else if (knight_mover.classList.contains('knight-position-f5')) {
                    knight_mover.classList.remove('knight-position-f5')
                    knight_mover.classList.add('knight-position-e5')
                }
                else if (knight_mover.classList.contains('knight-position-e5')) {
                    knight_mover.classList.remove('knight-position-e5')
                    knight_mover.classList.add('knight-position-d5')
                }
                else if (knight_mover.classList.contains('knight-position-d5')) {
                    knight_mover.classList.remove('knight-position-d5')
                    knight_mover.classList.add('knight-position-c5')
                }
                else if (knight_mover.classList.contains('knight-position-c5')) {
                    knight_mover.classList.remove('knight-position-c5')
                    knight_mover.classList.add('knight-position-b5')
                }
                else if (knight_mover.classList.contains('knight-position-b5')) {
                    knight_mover.classList.remove('knight-position-b5')
                    knight_mover.classList.add('knight-position-a5')
                }
                break;
            case "ArrowDown":
                // Column 1 Down
                if (knight_mover.classList.contains('knight-position-a1')) {
                    knight_mover.classList.remove('knight-position-a1')
                    knight_mover.classList.add('knight-position-b1')
                }
                else if (knight_mover.classList.contains('knight-position-b1')) {
                    knight_mover.classList.remove('knight-position-b1')
                    knight_mover.classList.add('knight-position-c1')
                }
                else if (knight_mover.classList.contains('knight-position-c1')) {
                    knight_mover.classList.remove('knight-position-c1')
                    knight_mover.classList.add('knight-position-d1')
                }
                else if (knight_mover.classList.contains('knight-position-d1')) {
                    knight_mover.classList.remove('knight-position-d1')
                    knight_mover.classList.add('knight-position-e1')
                }
                else if (knight_mover.classList.contains('knight-position-e1')) {
                    knight_mover.classList.remove('knight-position-e1')
                    knight_mover.classList.add('knight-position-f1')
                }
                // Column 2 Down
                else if (knight_mover.classList.contains('knight-position-a2')) {
                    knight_mover.classList.remove('knight-position-a2')
                    knight_mover.classList.add('knight-position-b2')
                }
                else if (knight_mover.classList.contains('knight-position-b2')) {
                    knight_mover.classList.remove('knight-position-b2')
                    knight_mover.classList.add('knight-position-c2')
                }
                else if (knight_mover.classList.contains('knight-position-c2')) {
                    knight_mover.classList.remove('knight-position-c2')
                    knight_mover.classList.add('knight-position-d2')
                }
                else if (knight_mover.classList.contains('knight-position-d2')) {
                    knight_mover.classList.remove('knight-position-d2')
                    knight_mover.classList.add('knight-position-e2')
                }
                else if (knight_mover.classList.contains('knight-position-e2')) {
                    knight_mover.classList.remove('knight-position-e2')
                    knight_mover.classList.add('knight-position-f2')
                }
                // Column 3 Down
                else if (knight_mover.classList.contains('knight-position-a3')) {
                    knight_mover.classList.remove('knight-position-a3')
                    knight_mover.classList.add('knight-position-b3')
                }
                else if (knight_mover.classList.contains('knight-position-b3')) {
                    knight_mover.classList.remove('knight-position-b3')
                    knight_mover.classList.add('knight-position-c3')
                }
                else if (knight_mover.classList.contains('knight-position-c3')) {
                    knight_mover.classList.remove('knight-position-c3')
                    knight_mover.classList.add('knight-position-d3')
                }
                else if (knight_mover.classList.contains('knight-position-d3')) {
                    knight_mover.classList.remove('knight-position-d3')
                    knight_mover.classList.add('knight-position-e3')
                }
                else if (knight_mover.classList.contains('knight-position-e3')) {
                    knight_mover.classList.remove('knight-position-e3')
                    knight_mover.classList.add('knight-position-f3')
                }
                // Column 4 Down
                else if (knight_mover.classList.contains('knight-position-a4')) {
                    knight_mover.classList.remove('knight-position-a4')
                    knight_mover.classList.add('knight-position-b4')
                }
                else if (knight_mover.classList.contains('knight-position-b4')) {
                    knight_mover.classList.remove('knight-position-b4')
                    knight_mover.classList.add('knight-position-c4')
                }
                else if (knight_mover.classList.contains('knight-position-c4')) {
                    knight_mover.classList.remove('knight-position-c4')
                    knight_mover.classList.add('knight-position-d4')
                }
                else if (knight_mover.classList.contains('knight-position-d4')) {
                    knight_mover.classList.remove('knight-position-d4')
                    knight_mover.classList.add('knight-position-e4')
                }
                else if (knight_mover.classList.contains('knight-position-e4')) {
                    knight_mover.classList.remove('knight-position-e4')
                    knight_mover.classList.add('knight-position-f4')
                }
                // Column 5 Down
                else if (knight_mover.classList.contains('knight-position-a5')) {
                    knight_mover.classList.remove('knight-position-a5')
                    knight_mover.classList.add('knight-position-b5')
                }
                else if (knight_mover.classList.contains('knight-position-b5')) {
                    knight_mover.classList.remove('knight-position-b5')
                    knight_mover.classList.add('knight-position-c5')
                }
                else if (knight_mover.classList.contains('knight-position-c5')) {
                    knight_mover.classList.remove('knight-position-c5')
                    knight_mover.classList.add('knight-position-d5')
                }
                else if (knight_mover.classList.contains('knight-position-d5')) {
                    knight_mover.classList.remove('knight-position-d5')
                    knight_mover.classList.add('knight-position-e5')
                }
                else if (knight_mover.classList.contains('knight-position-e5')) {
                    knight_mover.classList.remove('knight-position-e5')
                    knight_mover.classList.add('knight-position-f5')
                }
                break;
        }
    })
}
export { MOVE_POSITION };