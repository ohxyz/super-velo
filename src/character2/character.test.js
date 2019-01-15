let gameElement = document.getElementById( 'game' );
let width = 960;
let height = 480;

gameElement.width = 960;
gameElement.height = 480;
let gameContext = gameElement.getContext( '2d' );

let backgroundImage = new Image();
backgroundImage.src = '/assets/background-dev.png';

let walkImage = new Image();
walkImage.src = '/assets/walk.png';

let idleImage = new Image();
idleImage.src = '/assets/idle.png';

let attackImage = new Image();
attackImage.src = '/assets/attack.png';

let jumpImage = new Image();
jumpImage.src = '/assets/jump.png';


class BackgroundLayer extends Layer {

    draw( context ) {

        let pattern = context.createPattern( backgroundImage, 'repeat' );

        context.fillStyle = pattern;
        context.fillRect( this.x, this.y, this.width, this.height );
    }
}

let backgroundLayer = new BackgroundLayer( { 

    id: 'background',
    x: 0,
    y: 0,
    zIndex: 0,
    width: 960,
    height: 480,
    context: gameContext
} );

let idleSlice = new ImageSlice( { 

    image: idleImage,
    x: 0,
    y: 0,
    width: 196,
    height: 197.5
} )

let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 64,
    y: 64,
    zIndex: 2,
    width: 196,
    height: 197.5,
    context: gameContext,
    imageSlice: idleSlice,
    flip: true

} );


let sprites = {

    'walk': { image: walkImage, matrix: [ 4, 4 ] },
    'idle': { image: idleImage, matrix: [ 4, 5 ] },
    'attack': { image: attackImage, matrix: [ 4, 2 ] },
    'jump-prepare': { image: jumpImage, matrix: [ 4, 3 ], range: [ 0, 4 ] },
    'jump-start': { image: jumpImage, matrix: [ 4, 3 ], range: [ 4, 7 ] },
    'jump-end': { image: jumpImage, matrix: [ 4, 3 ], range: [ 7, 11 ] },
}

let velo = new Character( { 

    layer: veloLayer,
    sprites: sprites,

} )

let lm = new LayerManager( gameContext );

lm.add( backgroundLayer );
lm.add( veloLayer );

lm.init();
