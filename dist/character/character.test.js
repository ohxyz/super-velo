let veloElement = document.getElementById( 'velo' );

let walkImage = new Image();
walkImage.src = './assets/walk.png';

let idleImage = new Image();
idleImage.src = './assets/idle.png';

let attackImage = new Image();
attackImage.src = './assets/attack.png';

let jumpImage = new Image();
jumpImage.src = './assets/jump.png';

let sprites = {

    'walk': { image: walkImage, matrix: [ 4, 4 ] },
    'idle': { image: idleImage, matrix: [ 4, 5 ] },
    'attack': { image: attackImage, matrix: [ 4, 2 ] },
    'jump-start': { image: jumpImage, matrix: [ 4, 3 ], range: [ 0, 7 ] },
    'jump-end': { image: jumpImage, matrix: [ 4, 3 ], range: [ 7, 11 ] },
    'jump-stay': { image: jumpImage, matrix: [ 4, 3 ], range: [ 7, 7 ] },
}

let velo = new Character( { 

    canvasElement: veloElement,
    width: 196,
    height: 197.5,
    x: 250,
    y: 250,
    sprites: sprites,
} );

let veloController = new CharacterController( velo );
veloController.init();
