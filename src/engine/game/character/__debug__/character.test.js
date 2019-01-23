let gameElement = document.getElementById( 'game' );
let width = 960;
let height = 480;

gameElement.width = 960;
gameElement.height = 480;
let gameContext = gameElement.getContext( '2d' );

let backgroundImage = new Image();
backgroundImage.src = '/assets/background-dev.png';

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

let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 64,
    y: 64,
    zIndex: 2,
    width: 196,
    height: 197.5,
    context: gameContext,
} );


let walkImage = new Image();
walkImage.src = '/assets/walk.png';

let idleImage = new Image();
idleImage.src = '/assets/idle.png';

let attackImage = new Image();
attackImage.src = '/assets/attack.png';

let jumpImage = new Image();
jumpImage.src = '/assets/jump.png';

let walkSpriteImage = new SpriteImage( { 

    image: walkImage,
    sliceWidth: 196,
    sliceHeight: 197.5,
    matrix: [ 4, 4 ]
} );

let idleSpriteImage = new SpriteImage( { 

    image: idleImage,
    sliceWidth: 196,
    sliceHeight: 197.5,
    matrix: [ 4, 5 ]
} );

let am = new AnimationManager( );

am.add( 'walk', new SpriteAnimation( { layer: veloLayer, spriteImage: walkSpriteImage } ) );

am.add( 'idle', new SpriteAnimation( { layer: veloLayer, spriteImage: idleSpriteImage } ) );

let velo = new Character( { 

    layer: veloLayer,
    animationManager: am

} )

let lm = new LayerManager( gameContext );

lm.add( backgroundLayer );
lm.add( veloLayer );

lm.init();

document.body.addEventListener( 'keydown', event => {

    console.log( event.key );

    if ( event.key === 'a' ) {

        velo.walkLeft( 10 );
    }
    else if ( event.key === 'd' ) {

        velo.walkRight( 10 );
    }
} );

document.body.addEventListener( 'keyup', event => {

    if ( event.key === 'a' || event.key === 'd' ) {

        event.preventDefault();

        velo.idle();
    }
} );
