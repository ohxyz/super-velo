class CharacterAnimationManager extends AnimationManager {

    constructor( { canvasElement, width, height, sprites } ) {

        super();
        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.spritesMeta = sprites;

        this.addAnimations();
    }

    addAnimationsByAction( actionName, shouldRepeat, speed, priority, keepAlive ) {

        let defaultAnimationSettings = {

            canvasElement: this.canvasElement,
            width: this.width,
            height: this.height,
            repeat: shouldRepeat,
            speed: speed,
            keepAlive: keepAlive
        };

        let leftSettings = Object.assign( { 
            
            spriteImage: this.spritesMeta[ actionName ].image,
            spriteMatrix: this.spritesMeta[ actionName ].matrix,
            spriteRange: this.spritesMeta[ actionName ].range

        }, defaultAnimationSettings );

        this.add( actionName + '-left', new Animation( leftSettings ), priority );

        let rightSettings = Object.assign( { 
            
            spriteImage: this.spritesMeta[ actionName ].image,
            spriteMatrix: this.spritesMeta[ actionName ].matrix,
            spriteRange: this.spritesMeta[ actionName ].range,
            flip: true,

        }, defaultAnimationSettings );

        this.add( actionName + '-right', new Animation( rightSettings ), priority );
    }

    addAnimations() {

        this.addAnimationsByAction( 'walk', true );
        this.addAnimationsByAction( 'idle', true, 70 );
        this.addAnimationsByAction( 'attack', false, 40 );
        this.addAnimationsByAction( 'jump-start', false, 50, 0, true );
        this.addAnimationsByAction( 'jump-end', false, 50, 0 );
        this.addAnimationsByAction( 'jump-prepare', false, 50, 0 );
    }

    act( name, direction, onFinish ) {

        if ( direction === LEFT ) {

            return this.runOne( name + '-left', onFinish );
        }
        else if ( direction === RIGHT ) {

            return this.runOne( name + '-right', onFinish );
        }
    }

    attack( direction ) {

        if ( direction === LEFT ) {

            this.runOnlyFinish( 'attack-left', () => this.idle( direction ) );
        }
        else if ( direction === RIGHT ) {

            this.runOnlyFinish( 'attack-right', () => this.idle( direction ) );
        }
    }

    walk( direction ) {

        return this.act( 'walk', direction );
    }

    idle( direction ) {

        return this.act( 'idle', direction );
    }

    jumpPrepare( direction, onFinish ) {

        return this.act( 'jump-prepare', direction, onFinish );
    }

    jumpStart( direction, onFinish ) {

        return this.act( 'jump-start', direction, onFinish );
    }

    jumpEnd( direction, onFinish ) {

        return this.act( 'jump-end', direction, onFinish );
    }
}

/**
 * Character
 */
class Character {

    constructor( { canvasElement, width, height, x, y, facing, sprites } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.sprites = sprites;
        this.facing = typeof facing !== 'number' ? RIGHT : facing;

        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasElement.style.position = 'absolute';
        this.canvasElement.style.left = x + 'px';
        this.canvasElement.style.top = y + 'px';

        this.canvasContext = this.canvasElement.getContext( '2d' );
        this.stepSize = 6;

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

    walkUp() {

        this.characterAnimationManager.walk( this.facing );
        this.move( UP, this.stepSize );
    }

    walkDown() {

        this.characterAnimationManager.walk( this.facing );
        this.move( DOWN, this.stepSize );
    }

    jumpUp() {

        return this.jump( 0, 2 );
    }

    jumpDown() {

        return this.jump( 0, -2 );
    }

    jumpRight() {

        this.facing = RIGHT;
        return this.jump( 5, 0 );
    }

    jumpLeft() {

        this.facing = LEFT;
        return this.jump( -5, 0 );
    }

    jump( stepX = 0, stepY = 0 ) {

        this.jumpPrepare( () => this.jumpStart( stepX, stepY ) )
    }

    jumpAfterPrepare( direction ) {

        if ( direction === LEFT ) {

            this.jumpStart( -5, 0 );
        }
        else if ( direction === RIGHT ) {

            this.jumpStart( 5, 0 );
        }
        else if ( direction === UP ) {

            this.jumpStart( 0, 2 );
        }
        else if ( direction === DOWN ) {

            this.jumpStart( 0, -2 );
        }
    }

    jumpPrepare( onFinish = () => {} ) {

        if ( this.shouldEnableJump === false ) {

            return;
        }

        this.shouldEnableJump = false;
        this.characterAnimationManager.jumpPrepare( this.facing, onFinish )
    }

    jumpStart( stepX = 0, stepY = 0 ) {

        let jumpStartAnimationConatiner = this.characterAnimationManager.jumpStart( this.facing )

        let count = 1;
        let maxCount = 20;
        let speed = 13;
        let startHeight = 50;
        let timePassed = 0;

        let jumpEndAnimation = this.characterAnimationManager.get( 'jump-end-left' ).animation;
        let durationOfJumpEnd = jumpEndAnimation.duration;
        let totalTimeOfJump = speed * maxCount * 2 - speed;
        let delayBeforeJumpEnd = totalTimeOfJump - durationOfJumpEnd;

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
                    if ( timePassed >= delayBeforeJumpEnd ) {

                        if ( jumpStartAnimationConatiner.animation.isStarted ) {

                            jumpStartAnimationConatiner.animation.stop();
                        }

                        this.characterAnimationManager.jumpEnd( this.facing, () => {
                            
                            this.idle();
                        } )
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

    }
}

class CharacterController {

    constructor( character ) {

        this.character = character;

        this.keysDown = {

            'a': false, 'A': false, 'ArrowLeft': false,
            'd': false, 'D': false, 'ArrowRight': false,
            'w': false, 'W': false, 'ArrowUp': false,
            's': false, 'S': false, 'ArrowDown': false,

            'k': false, 'K': false, 'Enter': false,
            ' ': false
        }

        this.timerOfJumpDelay = 0;
    }

    init() {

        document.body.addEventListener( 'keydown', this.handleKeyDown.bind( this ) );
        document.body.addEventListener( 'keyup', this.handleKeyUp.bind( this ) );
    }

    isWalkKeyDown( direction ) {

        let isUp = this.keysDown[ 'w' ] || this.keysDown[ 'W' ] || this.keysDown[ 'ArrowUp' ];
        let isLeft = this.keysDown[ 'a' ] || this.keysDown[ 'A' ] || this.keysDown[ 'ArrowLeft' ];
        let isDown = this.keysDown[ 's' ] || this.keysDown[ 'S' ] || this.keysDown[ 'ArrowDown' ];
        let isRight = this.keysDown[ 'd' ] || this.keysDown[ 'D' ] || this.keysDown[ 'ArrowRight' ];

        if ( direction === UP ) {

            return isUp;
        }
        else if ( direction === LEFT ) {

            return isLeft;
        }
        else if ( direction === DOWN ) {

            return isDown;
        }
        else if ( direction === RIGHT ) {

            return isRight;
        }
        else {

            return isUp || isLeft || isDown || isRight;
        }
    }

    isJumpKeyDown() {

        return this.keysDown[ ' ' ];
    }

    isAttackKeyDown() {

        return this.keysDown[ 'k' ] || this.keysDown[ 'K' ] || this.keysDown[ 'Enter' ];
    }

    handleKeysOfAttack() {

        if ( this.isAttackKeyDown() ) {

            this.character.attack();
        }
    }

    handleKeysOfWalkAndJump() {

        if ( this.isWalkKeyDown( UP ) ) {

            this.isJumpKeyDown() ? this.character.jumpUp() : this.character.walkUp();
        }
        else if ( this.isWalkKeyDown( LEFT ) ) {

            this.isJumpKeyDown() ? this.character.jumpLeft() : this.character.walkLeft();
        }
        else if ( this.isWalkKeyDown( DOWN ) ) {

            this.isJumpKeyDown() ? this.character.jumpDown() : this.character.walkDown();
        }
        else if ( this.isWalkKeyDown( RIGHT ) ) {

            this.isJumpKeyDown() ? this.character.jumpRight() : this.character.walkRight();
        }
        // If jump key pressed first, then wait a bit to see if a walk key is pressed.
        else if ( this.isJumpKeyDown() ) {

            this.character.jumpPrepare( () => { 

                if ( this.isWalkKeyDown( LEFT ) ) {

                    this.character.jumpAfterPrepare( LEFT );
                }
                else if ( this.isWalkKeyDown( RIGHT ) ) {

                    this.character.jumpAfterPrepare( RIGHT );
                }
                else if ( this.isWalkKeyDown( UP ) ) {

                    this.character.jumpAfterPrepare( UP );
                }
                else if ( this.isWalkKeyDown( DOWN ) ) {

                    this.character.jumpAfterPrepare( DOWN );
                }
                else {

                    this.character.jumpStart();
                }

            } )
        }
    }

    handleKeyDown( event ) {

        if ( event.key in this.keysDown ) {

            this.keysDown[ event.key ] = true;
        }
        else {

            return;
        }

        this.handleKeysOfWalkAndJump();
        this.handleKeysOfAttack();
    }

    handleKeyUp( event ) {

        if ( event.key in this.keysDown ) {

            if ( !this.isAttackKeyDown() ) {

                this.character.idle();
            }

            this.keysDown[ event.key ] = false;

            if ( event.key === ' ' ) {

                clearTimeout( this.timerOfJumpDelay )
            }
        }
    }
}