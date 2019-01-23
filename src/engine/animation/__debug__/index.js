import { UP, RIGHT, DOWN, LEFT } from '../../constants.js';
import { Layer, ImageLayer, LayerManager, BackgroundLayer } from '../../layer';
import { SpriteImage } from '../../sprite/sprite.js';
import { MoveAnimation, Animation, AnimationQueue, SpriteAnimation, AnimationManager } from '../';
import backgroundImageSource from './images/background-dev.png';
import walkImageSource from './images/walk.png';
import idleImageSource from './images/idle.png';

let gameElement = document.getElementById( 'game' );
gameElement.width = 960;
gameElement.height = 480;
let gameContext = gameElement.getContext( '2d' );

let backgroundImage = new Image();
backgroundImage.src = backgroundImageSource;

let backgroundLayer = new BackgroundLayer( { 

    id: 'background',
    x: 0,
    y: 0,
    zIndex: 0,
    width: 960,
    height: 480,
    context: gameContext,
    image: backgroundImage
} );


let walkImage = new Image();
walkImage.src = walkImageSource;

let idleImage = new Image();
idleImage.src = idleImageSource;


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

let aq = new AnimationQueue(  { id: 'walk-left' } );
let a1 = new SpriteAnimation( { layer: veloLayer, spriteImage: walkSpriteImage } );
let a2 = new MoveAnimation( { layer: veloLayer, direction: LEFT } )

aq.add( a1, a2 );

let aq2 = new AnimationQueue(  { id: 'walk-right' } );
let a3 = new SpriteAnimation( { layer: veloLayer, flip: true, spriteImage: walkSpriteImage } );
let a4 = new MoveAnimation( { layer: veloLayer, direction: RIGHT } )

aq2.add( a3, a4 );

let am = new AnimationManager();
am.addQueue( aq );
am.addQueue( aq2 );

let lm = new LayerManager( gameContext );

lm.add( backgroundLayer );
lm.add( veloLayer );

lm.init();

window.am = am;

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