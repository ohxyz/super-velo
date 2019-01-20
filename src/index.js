import { UP, RIGHT, DOWN, LEFT, REFRESH_RATE } from './global.js';
import { Layer, ImageLayer, LayerManager } from './layer/layer.js';
import { SpriteImage } from './sprite/sprite.js';
import { Animation, AnimationQueue, SpriteAnimation } from './animation/animation.js';

let gameElement = document.getElementById( 'game' );
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


let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 64,
    y: 64,
    zIndex: 2,
    width: 196,
    height: 197.5,
    context: gameContext,
} );


class MoveAnimation extends Animation {

    constructor( { direction = LEFT, ...object } ) {

        super( object );

        this.direction = direction;
    }

    animate() {

        if ( this.direction === LEFT ) {

            this.layer.x -= 5;
        }
        else if ( this.direction === RIGHT ) {

            this.layer.x += 5;
        }

        this.isStarted = false;
    }
}

let aq = new AnimationQueue(  { id: 'walk-left' } );
let a1 = new SpriteAnimation( { layer: veloLayer, spriteImage: walkSpriteImage } );
let a2 = new MoveAnimation( { layer: veloLayer, direction: LEFT } )

aq.add( a1, a2 );

let aq2 = new AnimationQueue(  { id: 'walk-right' } );
let a3 = new SpriteAnimation( { layer: veloLayer, flip: true, spriteImage: walkSpriteImage } );
let a4 = new MoveAnimation( { layer: veloLayer, direction: RIGHT } )

aq2.add( a3, a4 );

let lm = new LayerManager( gameContext );

lm.add( backgroundLayer );
lm.add( veloLayer );

lm.init();


document.body.addEventListener( 'keydown', event => {

    console.log( event.key );

    if ( event.key === 'a' ) {

        aq2.stopAll();
        aq.startAll();
    }
    else if ( event.key === 'd' ) {

        aq.stopAll();
        aq2.startAll();
    }
} );