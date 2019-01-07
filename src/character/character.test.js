
let veloElement = document.getElementById( 'velo' );

let walkImage = new Image();
walkImage.src = '/assets/walk.png';

let idleImage = new Image();
idleImage.src = '/assets/idle.png';

let attackImage = new Image();
attackImage.src = '/assets/attack.png';

let jumpImage = new Image();
jumpImage.src = '/assets/jump.png';

let walkLeftAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteImage: walkImage,
    spriteMatrix: [ 4, 4 ],
} );

let walkRightAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteImage: walkImage,
    spriteMatrix: [ 4, 4 ],
    flip: true
} );

let idleLeftAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteImage: idleImage,
    spriteMatrix: [ 4, 5 ],
    speed: 80
} );

let idleRightAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteImage: idleImage,
    spriteMatrix: [ 4, 5 ],
    speed: 80,
    flip: true
} );

let aman = new AnimationManager();

// aman.add( 'walk-left', walkLeftAnimation );
// aman.add( 'walk-right', walkRightAnimation );
// aman.add( 'idle-left', idleLeftAnimation );
// aman.add( 'idle-right', idleRightAnimation );

let sprites = {

    'walk': { image: walkImage, matrix: [ 4, 4 ] },
    'idle': { image: idleImage, matrix: [ 4, 5 ] },
    'attack': { image: attackImage, matrix: [ 4, 2 ] },
    'jump-start': { image: jumpImage, matrix: [ 4, 3 ], range: [ 0, 7 ] },
    'jump-end': { image: jumpImage, matrix: [ 4, 3 ], range: [ 7, 11 ] }
}

let velo = new Character( { 

    canvasElement: veloElement,
    width: 196,
    height: 197.5,
    x: 250,
    y: 250,
    animationManager: aman,
    sprites: sprites,

} );

