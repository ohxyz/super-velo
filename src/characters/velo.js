import { NONE, UP, RIGHT, DOWN, LEFT, IDLE, WALK, JUMP, ATTACK } from '../engine/constants';
import { SpriteImage } from '../engine/sprite';
import { AnimationManager, AnimationQueue, SpriteAnimation, MoveAnimation } from '../engine/animation';
import { GameObject } from '../engine/game';
import { createAnimationManager } from './velo-animation-manager.js';
import { ImageLayer } from '../engine/layer';

class Velo extends GameObject {

    constructor( layer ) {
        
        super( layer );

        this.facing = RIGHT;
        this.animationManager = new AnimationManager();
        this.currentState = IDLE;

        this.init();
    }

    init() {

        this.animationManager = createAnimationManager( this.layer );
        this.idle();
    }

    walkByFacing() {

        if ( this.currentState === WALK ) {

            return;
        }

        this.currentState = WALK;

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'walk-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'walk-right' );
        }
    }

    stopWalk() {

        this.idle();
    }

    walk( direction ) {

        if ( this.currentState === JUMP || this.currentState === ATTACK ) {

            return;
        }

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

    walkLeft() {

        return this.walk( LEFT );
    }

    walkRight() {

        return this.walk( RIGHT );
    }

    attack( direction ) {

        if ( this.currentState === ATTACK ) {

            return;
        }

        this.currentState = ATTACK;

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'attack-left' ).then( () => { 

                this.idle();
            } );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'attack-right' ).then( () => { 

                this.idle();
            } );
        }

    }

    jumpLeft() {

        this.facing = LEFT;
        this.jump( LEFT );
    }

    jumpRight() {

        this.facing = RIGHT;
        this.jump( RIGHT );
    }

    jumpUp() {

        this.jump( UP );
    }

    jumpDown() {

        this.jump( DOWN );
    }

    idle() {

        if ( this.currentState === JUMP ) {

            return;
        }

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'idle-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'idle-right' );
        }

        this.currentState = IDLE;
    }

    jump( direction = NONE ) {

        if ( this.currentState === JUMP ) {

            return;
        }

        this.currentState = JUMP;

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'jump-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'jump-right' );
        }

        this.stay( 300 )
            .then( () => this.bounce( direction, { time: 700 } ) )
            .then( () => { this.currentState = NONE } );
    }

    stop() {

        this.animationManager.stopAllQueues();
    }
}


let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 128,
    y: 128,
    zIndex: 2,
    width: 196,
    height: 197.5,
} );

let velo = new Velo( { id: 'velo', layer: veloLayer } );

export {
    
    velo
};

