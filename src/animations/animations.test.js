/**
 * Super Velociraptor
 *
 *
 */

/* Game *******************************************************************************************/


/* Background *************************************************************************************/


/* Velo *******************************************************************************************/

var velo = document.getElementById( 'velo' );
var veloContext = velo.getContext( '2d' );

velo.style.position = 'absolute';
velo.style.left = '100px';
velo.style.top = '200px';

velo.width = 196;
velo.height = 197;

const LEFT = 1;
const RIGHT = -1;

let shouldEnableJump = true;
let faceDirection = 0;

var veloImage = new Image();

veloImage.src = '/assets/red-velo-784.png';

veloImage.onload = function() {

    // veloContext.drawImage( veloImage, 0, 0, 245, 247, 0, 0, 245, 247 );
    // renderWalkAnimation( LEFT );


    // veloContext.translate( 245, 0 );
    // veloContext.scale( -1, 1 );
    // draw();
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

let walkLeftCanvas = document.getElementById( 'walk-left' );

let walkLeftAnimation = new Animation( { 

    canvasElement: walkLeftCanvas, 
    width: 196,
    height: 197,
    spriteSource: '/assets/red-velo-784.png',
    spriteMatrix: [ 4, 4 ]

} );


let attackLeftAnimation = new Animation( {

    canvasElement: document.getElementById( 'attack-left' ), 
    width: 196,
    height: 197,
    spriteSource: '/assets/attack-left.png',
    spriteMatrix: [ 4, 2 ]

} );

animationManager.add( 'walk-left', walkLeftAnimation );
animationManager.add( 'attack-left', attackLeftAnimation );
