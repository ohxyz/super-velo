/**
 * Character
 */
class Character {

    constructor( { canvasElement, width, height, x, y, animationManager, facing, sprites } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.animationManager = animationManager;
        this.sprites = sprites;
        this.facing = typeof facing !== 'number' ? RIGHT : facing;

        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasElement.style.position = 'absolute';
        this.canvasElement.style.left = x + 'px';
        this.canvasElement.style.top = y + 'px';

        this.canvasContext = this.canvasElement.getContext( '2d' );
        this.stepSize = 5;

        this.characterAnimationManager = new CharacterAnimationManager( {

            canvasElement: this.canvasElement,
            width: this.width,
            height: this.height,
            sprites: this.sprites
            
        } );

        this.shouldEnableJump = true;

        this.idle();
    }

    move( direction, step ) {

        let left = parseInt( this.canvasElement.style.left, 10 );
        let top = parseInt( this.canvasElement.style.top, 10 );

        if ( direction === UP ) {

            this.canvasElement.style.top = top - step + 'px';
        }
        else if ( direction === RIGHT ) {

            this.canvasElement.style.left = left + step + 'px';
        }
        else if ( direction === DOWN ) {

            this.canvasElement.style.top = top + step + 'px';
        }
        else if ( direction === LEFT ) {

            this.canvasElement.style.left = left - step + 'px';
        }
        else {

            throw new Error( '[Velo] Left, right, up or down only.\n' );
        }
    }

    idle() {

        this.characterAnimationManager.idle( this.facing );
    }

    attack() {

        this.characterAnimationManager.attack( this.facing );
    }

    walkLeft() {

        this.characterAnimationManager.walk( LEFT );
        this.move( LEFT, this.stepSize );
        this.facing = LEFT;
    }

    walkRight() {

        this.characterAnimationManager.walk( RIGHT );
        this.move( RIGHT, this.stepSize );
        this.facing = RIGHT;
    }

    jumpUp() {

        return this.jump( 0, 2 );
    }

    jumpDown() {

        return this.jump( 0, -2 );
    }

    jumpRight() {

        this.facing = RIGHT;
        return this.jump( 3, 0 );
    }

    jumpLeft() {

        this.facing = LEFT;
        return this.jump( -3, 0 );
    }

    jump( stepX = 0, stepY = 0 ) {

        let realJumpIndex = 6; /* Refer to sprite image */

        let count = 1;
        let maxCount = 22;
        let speed = 13;
        let startHeight = 50;
        let timePassed = 0;

        let delayBeforeJump = (
            this.characterAnimationManager.get( 'jump-start-left').animationSpeed * realJumpIndex
        );

        let totalTimeOfJump = speed * maxCount * 2 - 15;
        let durationOfJumpEnd = this.characterAnimationManager.get( 'jump-end-left').duration;
        let timeBeforeJumpEnd = totalTimeOfJump - durationOfJumpEnd;

        if ( this.shouldEnableJump === false ) {

            return;
        }

        this.shouldEnableJump = false;
        this.characterAnimationManager.jumpStart( this.facing );

        setTimeout( () => {

            let jumpTimer = setInterval( () => {

                if ( count < maxCount ) {

                    let top = parseInt( this.canvasElement.style.top, 10 );
                    let left = parseInt( this.canvasElement.style.left, 10 );
                    let distance = parseInt( startHeight / count, 10 );

                    this.canvasElement.style.top = top - distance - stepY + 'px';
                    this.canvasElement.style.left = left + stepX + 'px';

                    count ++;
                    timePassed += speed;
                }
                else {

                    clearInterval( jumpTimer );

                    jumpTimer = setInterval( () => {

                        count --;
                        timePassed += speed;

                        /* Based on observation of combination of jump and animation */
                        if ( timePassed >= timeBeforeJumpEnd ) {

                            this.characterAnimationManager.jumpEnd( this.facing )
                        }

                        if ( count > 0 ) {

                            let top = parseInt( this.canvasElement.style.top );
                            let left = parseInt( this.canvasElement.style.left, 10 );
                            let distance = parseInt( startHeight / count );

                            this.canvasElement.style.top = top + distance - stepY + 'px';
                            this.canvasElement.style.left = left + stepX + 'px';
                        }
                        else {

                            clearInterval( jumpTimer );
                            this.shouldEnableJump = true;
                        } 

                    }, speed );
                }

            }, speed );

        }, delayBeforeJump );

    }
}
