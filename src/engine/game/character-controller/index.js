import { UP, RIGHT, DOWN, LEFT } from '../../constants.js';

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

    resetKeysDown() {

        for ( let key in this.keysDown ) {

            this.keysDown[ key ] = false;
        }
    }

    isWalkKeyDown( key ) {

        let isUp    = this.keysDown[ 'w' ] || this.keysDown[ 'W' ] || this.keysDown[ 'ArrowUp' ];
        let isLeft  = this.keysDown[ 'a' ] || this.keysDown[ 'A' ] || this.keysDown[ 'ArrowLeft' ];
        let isDown  = this.keysDown[ 's' ] || this.keysDown[ 'S' ] || this.keysDown[ 'ArrowDown' ];
        let isRight = this.keysDown[ 'd' ] || this.keysDown[ 'D' ] || this.keysDown[ 'ArrowRight' ];

        if ( key === UP ) {

            return isUp;
        }
        else if ( key === LEFT ) {

            return isLeft;
        }
        else if ( key === DOWN ) {

            return isDown;
        }
        else if ( key === RIGHT ) {

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

            this.isJumpKeyDown() ? this.character.jump( UP ) : this.character.walk( UP );
        }
        else if ( this.isWalkKeyDown( LEFT ) ) {

            this.isJumpKeyDown() ? this.character.jump( LEFT ) : this.character.walk( LEFT );
        }
        else if ( this.isWalkKeyDown( DOWN ) ) {

            this.isJumpKeyDown() ? this.character.jump( DOWN ) : this.character.walk( DOWN );
        }
        else if ( this.isWalkKeyDown( RIGHT ) ) {

            this.isJumpKeyDown() ? this.character.jump( RIGHT ) : this.character.walk( RIGHT );
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

        this.resetKeysDown();

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

export {

    CharacterController
};