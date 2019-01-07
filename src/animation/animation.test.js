 /**
 * Super Velociraptor
 *
 *
 */

/* Game *******************************************************************************************/


/* Background *************************************************************************************/


/* Velo *******************************************************************************************/

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
    spriteRange: [ 0, 7 ],

    repeat: false,
    // speed: 500,

} );

let jumpLeftDownAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-left-down' ), 
    width: 196,
    height: 197.5,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 3 ],
    spriteRange: [ 7, 11 ],
    repeat: false,
    // speed: 500,
} );

let jumpRightAnimation = new Animation( {

    canvasElement: document.getElementById( 'jump-right' ), 
    width: 196,
    height: 197,
    spriteImage: jumpImage,
    spriteMatrix: [ 4, 3 ],
    spriteRange: [ 7, 11 ],
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