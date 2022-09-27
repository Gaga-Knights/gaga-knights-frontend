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
                break;
            case "ArrowUp":
                if (knight_mover.classList.contains('knight-position-f3')) {
                    knight_mover.classList.remove('knight-position-f3')
                    knight_mover.classList.add('knight-position-e3')
                }
                break;
            case "ArrowDown":
                if (knight_mover.classList.contains('knight-position-e3')) {
                    knight_mover.classList.remove('knight-position-e3')
                    knight_mover.classList.add('knight-position-f3')
                }
                break;
        }
    })
}
export { MOVE_POSITION };