import { UP, RIGHT, DOWN, LEFT } from '../global.js';

class Character {

    constructor( { animationManager } ) {
        
        this.animationManager = animationManager;
        this.facing = RIGHT;
    }

    init() {


    }

    idle() {

        
    }

    walk( direction ) {

        console.log( 'walk', direction );

    }

    jump( direction ) {

        console.log( 'jump', direction );
    }

    jumpAfterPrepare( direction ) {

        console.log( 'jump after prepare', direction );
    }

    attack() {

        console.log( 'attack' )
    }
}

export {
    
    Character
}

