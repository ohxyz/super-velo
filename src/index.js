/**
 * Super Velociraptor
 *
 *
 */

/* Game *******************************************************************************************/

var game = document.getElementById( 'game' );
game.style.position = 'relative';
game.style.height = '540px';

/* Intro ******************************************************************************************/

var intro = document.getElementById( 'intro' );
intro.style.display = 'none';
intro.style.position = 'absolute';
intro.style.left = '300px';
intro.style.top = '100px';

/* Background *************************************************************************************/

var background = document.getElementById( 'background' );

background.width = 960;
background.height = 480;

var backgroundContext = background.getContext( '2d' );
var backgroundImage = new Image();

fillDevBackground();
// fillBackground();

function fillDevBackground() {

    backgroundImage.src = './assets/background-dev.png';

    backgroundImage.onload = function () {

        var pattern = backgroundContext.createPattern( backgroundImage, 'repeat' );
        backgroundContext.fillStyle = pattern;
        backgroundContext.fillRect( 0, 0, background.width, background.height );
    }
}

function fillBackground() {

    backgroundImage.src = './assets/background.png';

    backgroundImage.onload = function () {

        backgroundContext.scale( 0.32, 0.32 );
        backgroundContext.drawImage( backgroundImage, 0, 0 );
    }
}

/* Velo *******************************************************************************************/

var velo = document.getElementById( 'velo' );
var veloContext = velo.getContext( '2d' );

velo.style.position = 'absolute';
velo.style.left = '300px';
velo.style.top = '200px';
velo.style.border = 'none';

velo.width = 196;
velo.height = 197;

const LEFT = 1;
const RIGHT = -1;

let shouldEnableJump = true;
let faceDirection = 0;

function isMoveRight( key ) {

    return ( key === 'd' || key === 'D' || key === 'ArrowRight' );
}

function isMoveLeft( key ) {

    return ( key === 'a' || key === 'A' || key === 'ArrowLeft' );
}

function isMoveUp( key ) {

    return ( key === 'w' || key === 'W' || key === 'ArrowUp' );
}

function isMoveDown( key ) {

    return ( key === 's' || key === 'S' || key === 'ArrowDown' );
}

function isJump( key ) {

    return key === ' ';
}

function handleKeyDown( event ) {

    console.log( event.key );

    let left = parseInt( velo.style.left );
    let top = parseInt( velo.style.top );
    let step = 5;

    if ( isMoveRight( event.key ) ) {

        event.preventDefault();
        velo.style.left = left + step + 'px';

        if ( faceDirection === LEFT ) {

            stopWalkAnimation();
        }

        startWalkAnimation( RIGHT );
        faceDirection = RIGHT;
    }
    else if ( isMoveLeft( event.key ) ) {

        event.preventDefault();
        velo.style.left = left - step + 'px';

        if ( faceDirection === RIGHT ) {

            stopWalkAnimation();
        }

        startWalkAnimation( LEFT );
        faceDirection = LEFT;

    }
    else if ( isMoveUp( event.key ) ) {

        event.preventDefault();
        velo.style.top = top - step + 'px';
    }
    else if ( isMoveDown( event.key ) ) {

        event.preventDefault();
        velo.style.top = top + step + 'px';
    }
    else if ( isJump( event.key ) ) {

        event.preventDefault();

        if ( shouldEnableJump === false ) {

            return;
        }

        jump();
    }

}

function handleKeyUp( event ) {

    console.log( 'up', event.key );
}

document.body.addEventListener( 'keydown', handleKeyDown );
document.body.addEventListener( 'keyup', handleKeyUp);

function jump() {

    shouldEnableJump = false;

    let count = 1;

    let jumpTimer = setInterval( () => { 

        if ( count < 20 ) {

            let top = parseInt( velo.style.top );
            let jumpHeight = parseInt( 50 / count );
            velo.style.top = top - jumpHeight + 'px';

            count ++;
        }
        else {

            clearInterval( jumpTimer );

            let landTimer = setInterval( () => {

                count --;

                if ( count > 0 ) {

                    let top = parseInt( velo.style.top );

                    let jumpHeight = parseInt( 50 / count );

                    velo.style.top = top + jumpHeight + 'px';
                }
                else {

                    clearInterval( landTimer );
                    shouldEnableJump = true;
                } 

            }, 10 );
        }

    }, 10 );

}

var veloImage = new Image();

veloImage.src = './assets/walk.png';

veloImage.onload = function() {

    // veloContext.drawImage( veloImage, 0, 0, 245, 247, 0, 0, 245, 247 );
    // renderWalkAnimation( LEFT );


    // veloContext.translate( 245, 0 );
    // veloContext.scale( -1, 1 );
    draw();
};

let walkAnimationTimer = 0;
let isWalkAnimationStarted = false;

function startWalkAnimation( direction ) {

    if ( isWalkAnimationStarted === true ) {

        return;
    }

    renderWalkAnimation( direction );
    isWalkAnimationStarted = true;
}

function stopWalkAnimation() {

    clearInterval( walkAnimationTimer );
    isWalkAnimationStarted = false;
}

function draw( xSeq = 0, ySeq = 0 ) {

    veloContext.drawImage( veloImage, 196 * xSeq, 197 * ySeq , 196 , 197, 0, 0, 196, 197 );
}

function renderWalkAnimation( direction ) {

    if ( direction === LEFT ) {

        veloContext.setTransform( 1, 0, 0, 1, 0, 0 );
        veloContext.translate( 0, 0 );
        veloContext.scale( 1, 1 );
    }
    else if ( direction === RIGHT ) {

        veloContext.setTransform( 1, 0, 0, 1, 0, 0 );
        veloContext.translate( 196, 0 );
        veloContext.scale( -1, 1 );
    }
    else {

        throw new Error( 'Direction should be -1 or 1.' );
    }

    let xSeq = 0; 
    let ySeq = 0;
    let frameCount = 0;

    walkAnimationTimer = setInterval( function () { 

        veloContext.clearRect( 0, 0, velo.width, velo.height );
        
        xSeq = frameCount % 4;
        ySeq = Math.floor( frameCount / 4 );

        if ( frameCount < 15 ) {

            frameCount ++;
        }
        else {

            frameCount = 0;
        }

        draw( xSeq, ySeq );

    }, 50 );
}

