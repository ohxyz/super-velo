const { NONE, UP, RIGHT, DOWN, LEFT, IDLE, WALK, JUMP, ATTACK } = require( '../../engine/constants' );
const { GameObject } = require( '../../engine/game' );
const { createVeloAnimationManager } = require( './velo-animation-manager.js' );

class Velo extends GameObject {

    constructor( { imageSource, facing = RIGHT, ...args } ) {
        
        super( args );

        this.facing = facing;
        this.currentState = IDLE;
        this.animationManager = createVeloAnimationManager( { 

            layer: this.layer, 
            imageSource: imageSource
        } );

        this.init();
    }

    init() {

        this.idle();
    }

    handleWalk() {

        let rock = game.object( 'rock' );
        let isOverlapping = this.isOverlapping( rock, { width: 50, height: 80 } );

        if ( isOverlapping ) {

            rock.layer.backgroundColor = 'purple';
        }
        else {

            rock.layer.backgroundColor = 'pink';
        }
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
        this.handleWalk();
    }

    walk( direction ) {

        if ( this.currentState === JUMP || this.currentState === ATTACK ) {

            return;
        }

        this.handleWalk();

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

        this.attackRock();
    }

    attackRock() {

        let rock = game.object( 'rock' );
        let isOverlapping = this.isOverlapping( rock, { width: 50, height: 80 } );

        if ( isOverlapping ) {

            rock.layer.backgroundColor = 'red';
        }
        else {

            rock.layer.backgroundColor = 'yellow';
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
            .then( () => this.bounce( direction, { duration: 700 } ) )
            .then( () => { this.currentState = NONE } );
    }

    stop() {

        this.animationManager.stopAllQueues();
    }
}

module.exports = {
    
    Velo
};

