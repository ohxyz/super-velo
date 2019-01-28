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

let walkSpriteImage = new SpriteImage( { 

    image: walkImage,
    sliceWidth: 196,
    sliceHeight: 197.5,
    matrix: [ 4, 4 ]
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
let a1 = new SpriteAnimation( { layer: veloLayer, spriteImage: walkSpriteImage, repeat: false } );
let a2 = new MoveAnimation( { layer: veloLayer, direction: LEFT } )

aq.add( a1, a2 );

let aq2 = new AnimationQueue(  { id: 'walk-right' } );
let a3 = new SpriteAnimation( { layer: veloLayer, flip: true, spriteImage: walkSpriteImage, repeat: false } );
let a4 = new MoveAnimation( { layer: veloLayer, direction: RIGHT } )

aq2.add( a3, a4 );

let am = new AnimationManager();
am.addQueue( aq );
am.addQueue( aq2 );

let lm = new LayerManager( gameContext );

lm.add( backgroundLayer );
lm.add( veloLayer );

lm.init();

let aq3 = new AnimationQueue( { id: 'queue' } );

let a5 = new Animation();
let a6 = new Animation();
let a7 = new Animation();

// aq3.add( a5, a6, a7 );

aq3.add( a1, a3 );

window.am = am;
window.aq3 = aq3;
