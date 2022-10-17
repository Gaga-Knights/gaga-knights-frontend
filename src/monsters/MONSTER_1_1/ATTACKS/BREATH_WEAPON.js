const knight_ded = () => {
     // Knight Positions
     const knight_mover = document.querySelector("#knight-mover")
     const knight_tile = knight_mover.classList
     
     //Shorthand for 'knight-position-'
    const kp = 'knight-position-'
    
     // check for knight-position
    
    if (knight_tile.contains(`${kp}f3`)) {
        // console.log('knight ded')
    }
    }

    // What is running is the breathweapon, which is just a countdown of 5 seconds to check if the player is ded
const BREATH_WEAPON = () => {
    // add here a 1 second blink of a fireball where the player needs to avoid to now be ded
    const myTimeout = setTimeout(knight_ded,5000)
};

export { BREATH_WEAPON };