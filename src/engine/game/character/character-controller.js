import { UP, RIGHT, DOWN, LEFT, WALK, JUMP, ATTACK, IDLE } from '../../constants.js';

class CharacterController {

    constructor( { character, canvasElement } ) {

        this.character = character;
        this.canvasElement = canvasElement;

        this.keysDown = {

            'a': false, 'A': false, 'ArrowLeft': false,
            'd': false, 'D': false, 'ArrowRight': false,
            'w': false, 'W': false, 'ArrowUp': false,
            's': false, 'S': false, 'ArrowDown': false,
            'k': false, 'K': false, 'Enter': false,
            ' ': false
        }
    }

    init() {

        document.body.addEventListener( 'keydown', this.handleKeyDown.bind( this ) );
        document.body.addEventListener( 'keyup', this.handleKeyUp.bind( this ) );
        this.canvasElement.addEventListener( 'mousedown', this.handleMouseDown.bind( this ) );
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

            this.isJumpKeyDown() ? this.character.jumpUp() : this.character.walk( UP );
        }
        else if ( this.isWalkKeyDown( LEFT ) ) {

            this.isJumpKeyDown() ? this.character.jumpLeft() : this.character.walk( LEFT );
        }
        else if ( this.isWalkKeyDown( DOWN ) ) {

            this.isJumpKeyDown() ? this.character.jumpDown() : this.character.walk( DOWN );
        }
        else if ( this.isWalkKeyDown( RIGHT ) ) {

            this.isJumpKeyDown() ? this.character.jumpRight() : this.character.walk( RIGHT );
        }
        else if ( this.isJumpKeyDown() ) {

            this.character.jump();
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

            if ( this.character.currentState === WALK ) {

                this.character.stopWalk();
            }
            
            this.keysDown[ event.key ] = false;
        }
    }

    handleMouseDown( event ) {

        // Continuous clicks cause text gets selected.
        event.preventDefault();

        this.character.attack();
    }
}

export {

    CharacterController
};