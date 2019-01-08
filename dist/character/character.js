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
        return this.jump( 3, 0 );
    }

    jumpLeft() {

        this.facing = LEFT;
        return this.jump( -3, 0 );
    }

    jump( stepX = 0, stepY = 0 ) {

        if ( this.shouldEnableJump === false ) {

            return;
        }

        let realJumpIndex = 6; /* Refer to sprite image */

        let count = 1;
        let maxCount = 22;
        let speed = 13;
        let startHeight = 50;
        let timePassed = 0;

        let jumpStartAnimation = this.characterAnimationManager.get( 'jump-start-left' ).animation;
        let delayBeforeJumpStart = jumpStartAnimation.animationSpeed * realJumpIndex;

        let jumpEndAnimation = this.characterAnimationManager.get( 'jump-end-left' ).animation;
        let durationOfJumpEnd = jumpEndAnimation.duration;
        let totalTimeOfJump = speed * maxCount * 2 - 15;
        let delayBeforeJumpEnd = totalTimeOfJump - durationOfJumpEnd;

        this.shouldEnableJump = false;
        this.characterAnimationManager.jumpStart( this.facing, () => {

            this.characterAnimationManager.jumpStay( this.facing ) 
        } );

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
                        if ( timePassed >= delayBeforeJumpEnd ) {

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

        }, delayBeforeJumpStart );
    }
}

class CharacterAnimationManager extends AnimationManager {

    constructor( { canvasElement, width, height, sprites } ) {

        super();
        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.spritesMeta = sprites;

        this.addAnimations();
    }

    addAnimationsByAction( actionName, shouldRepeat = true, speed = 50, priority ) {

        let defaultAnimationSettings = {

            canvasElement: this.canvasElement,
            width: this.width,
            height: this.height,
            repeat: shouldRepeat,
            speed: speed,
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
        this.addAnimationsByAction( 'jump-start', false, 50, 0 );
        this.addAnimationsByAction( 'jump-stay', false, 50, 0 );
        this.addAnimationsByAction( 'jump-end', false, 50, 0 );
    }

    act( name, direction, onFinish ) {

        if ( direction === LEFT ) {

            this.runOne( name + '-left', onFinish );
        }
        else if ( direction === RIGHT ) {

            this.runOne( name + '-right', onFinish );
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

    jumpStart( direction, onFinish ) {

        return this.act( 'jump-start', direction, onFinish );
    }

    jumpStay( direction ) {

        return this.act( 'jump-stay', direction );
    }

    jumpEnd( direction, onFinish ) {

        return this.act( 'jump-end', direction, onFinish );
    }
}

class CharacterController {

    constructor( character ) {

        this.character = character;

        // Suppose only one instance of CharacterController
        this.keysOfWalkRight = [ 'd', 'D', 'ArrowRight' ];
        this.keysOfWalkLeft  = [ 'a', 'A', 'ArrowLeft' ];
        this.keysOfWalkUp    = [ 'w', 'W', 'ArrowUp' ];
        this.keysOfWalkDown  = [ 's', 'S', 'ArrowDown' ];

        this.keysOfWalk = this.keysOfWalkLeft
                              .concat( this.keysOfWalkRight )
                              .concat( this.keysOfWalkUp )
                              .concat( this.keysOfWalkDown );

        this.keysOfJump = [ ' ' ];

    }

    init() {

        document.body.addEventListener( 'keydown', this.handleKeyDown.bind( this ) );
        document.body.addEventListener( 'keyup', this.handleKeyUp.bind( this ) );
    }

    handleKeyEvent( event, keys, func ) {

        if ( keys.indexOf( event.key ) >= 0 ) {

            event.preventDefault();
            func();
        }
    }

    handleKeyDown( event ) {

        this.handleKeyEvent( event, this.keysOfWalkRight, () => this.character.walkRight() );
        this.handleKeyEvent( event, this.keysOfWalkLeft, () => this.character.walkLeft() );
        this.handleKeyEvent( event, this.keysOfWalkUp, () => this.character.walkUp() );
        this.handleKeyEvent( event, this.keysOfWalkDown, () => this.character.walkDown() );
        this.handleKeyEvent( event, this.keysOfJump, () => this.character.jump() );
    }

    handleKeyUp( event ) {

       this.handleKeyEvent( event, this.keysOfWalk, () => this.character.idle() );
    }
}