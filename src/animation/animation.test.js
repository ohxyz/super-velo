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

velo.width = 196;
velo.height = 197;

let shouldEnableJump = true;
let faceDirection = 0;

var veloImage = new Image();

veloImage.src = '/assets/walk.png';

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

let idleImage = new Image();
idleImage.src = '/assets/idle.png';

let idleLeftAnimation = new Animation( { 

    canvasElement: document.getElementById( 'idle-left' ), 
    width: 196,
    height: 197.5,
    spriteImage: idleImage,
    spriteMatrix: [ 4, 5 ],
    speed: 80
} );

let idleRightAnimation = new Animation( { 

    canvasElement: document.getElementById( 'idle-right' ), 
    width: 196,
    height: 197.5,
    spriteImage: idleImage,
    spriteMatrix: [ 4, 5 ],
    speed: 80,
    flip: true
} );

let walkImage = new Image();
walkImage.src = '/assets/walk.png';

let walkLeftAnimation = new Animation( { 

    canvasElement: document.getElementById( 'walk-left' ), 
    width: 196,
    height: 197,
    spriteImage: walkImage,
    spriteMatrix: [ 4, 4 ],
} );

let walkRightAnimation = new Animation( { 

    canvasElement: document.getElementById( 'walk-right' ), 
    width: 196,
    height: 197,
    spriteImage: walkImage,
    spriteMatrix: [ 4, 4 ],
    flip: true
} );

let attackImage = new Image();
attackImage.src = '/assets/attack.png';

let attackLeftAnimation = new Animation( {

    canvasElement: document.getElementById( 'attack-left' ), 
    width: 196,
    height: 197,
    spriteImage: attackImage,
    spriteMatrix: [ 4, 2 ],
    repeat: false
} );

let attackRightAnimation = new Animation( {

    canvasElement: document.getElementById( 'attack-right' ), 
    width: 196,
    height: 197,
    spriteImage: attackImage,
    spriteMatrix: [ 4, 2 ],
    flip: true

} );


let jumpImage = new Image();
jumpImage.src = '/assets/jump.png';

let jumpLeftAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-left' ), 
    width: 196,
    height: 197,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 2 ],
} );


let jumpLeftUpAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-left-up' ), 
    width: 196,
    height: 197.5,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 3 ],
    spriteStart: 0,
    spriteEnd: 7,

    repeat: false,
    // speed: 500,

} );

let jumpLeftDownAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-left-down' ), 
    width: 196,
    height: 197.5,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 3 ],
    spriteStart: 7,
    spriteEnd: 11,

    repeat: false,
    // speed: 500,
} );

let jumpRightAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-right' ), 
    width: 196,
    height: 197,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 3 ],
    spriteStart: 7,
    spriteEnd: 11,
    flip: true,
    repeat: false,
} );


let animationManager = new AnimationManager();

animationManager.add( 'idle-left', idleLeftAnimation );
animationManager.add( 'idle-right', idleRightAnimation );
animationManager.add( 'walk-left', walkLeftAnimation );
animationManager.add( 'walk-right', walkRightAnimation );
animationManager.add( 'attack-left', attackLeftAnimation );
animationManager.add( 'attack-right', attackRightAnimation );
animationManager.add( 'jump-left', jumpLeftAnimation );
animationManager.add( 'jump-right', jumpRightAnimation );
animationManager.add( 'jump-left-up', jumpLeftUpAnimation );
animationManager.add( 'jump-left-down', jumpLeftDownAnimation );

animationManager.runAll();