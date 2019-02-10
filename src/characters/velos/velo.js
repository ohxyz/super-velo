const { 

    NONE, UP, RIGHT, DOWN, LEFT, IDLE, WALK, JUMP, ATTACK, DEAD 

} = require( '../../engine/constants' );

const { GameObject } = require( '../../engine/game' );
const { createVeloAnimationManager } = require( './velo-animation-manager.js' );

class Velo extends GameObject {

    constructor( { imageSource, facing = RIGHT, damage = 30, health = 100, ...args } ) {
        
        super( args );

        this.facing = facing;
        this.health = health;
        this.damage = damage;
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

    isDead() {

        return this.currentState === DEAD;
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

        this.handleAttack();
    }

    handleAttack() {

        let yellowVelo = game.object( 'yellow-velo' );
        let isOverlapping = this.isOverlapping( yellowVelo, { width: 50, height: 80 } );

        if ( isOverlapping ) {

            // yellowVelo.layer.backgroundColor = 'green';

            if ( yellowVelo.isDead() ) {

                console.log( 'Already died.' );
            }
            else {

                yellowVelo.health -= this.damage;

                if ( yellowVelo.health < 0 ) {

                    yellowVelo.die();
                }
            }
        }
        else {

            // yellowVelo.layer.backgroundColor = 'red';
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

    die() {

        if ( this.currentState === JUMP ) {

            return;
        }

        if ( this.facing === LEFT ) {

            this.animationManager.runQueue( 'die-left' );
        }
        else if ( this.facing === RIGHT ) {

            this.animationManager.runQueue( 'die-right' );
        }

        this.currentState = DEAD;
        
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

