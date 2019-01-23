import { NONE, UP, RIGHT, DOWN, LEFT } from './engine/constants';
import { SpriteImage } from './engine/sprite';
import { AnimationManager, AnimationQueue, SpriteAnimation, MoveAnimation } from './engine/animation';
import { GameObject } from './engine/game';
import { createAnimationManager } from './velo-animation-manager.js';

class Velo extends GameObject{

    constructor( layer ) {
        
        super( layer );

        this.facing = RIGHT;
        this.animationManager = new AnimationManager();

        this.init();
    }

    init() {

        this.animationManager = createAnimationManager( this.layer );
    }

    walkByFacing() {

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'walk-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'walk-right' );
        }
    }

    walk( direction ) {

        if ( direction === LEFT ) {

            this.facing = LEFT;
            this.move( LEFT );
            
        }
        else if ( direction === RIGHT ) {

            this.facing = RIGHT;
            this.move( RIGHT );

        }
        else if ( direction === UP ) {

            this.move( UP );

        }
        else if ( direction === DOWN ) {

            this.move( DOWN );
        }

        this.walkByFacing();
    }

    idle() {

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'idle-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'idle-right' );
        }
    }

    jumpStart() {

        
    }

    jump() {



    }

    jumpPrepare() {


    }

    stop() {

        this.animationManager.stopAllQueues();
    }
}

export {
    
    Velo
}

