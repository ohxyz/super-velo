import { UP, RIGHT, DOWN, LEFT } from './engine/constants';
import { SpriteImage } from './engine/sprite';
import { AnimationManager } from './engine/animation';
import { BackgroundLayer, LayerManager, ImageLayer, Layer } from './engine/layer';
import { Game } from './engine/game';

import { velo } from './characters/velo.js';
import { Rock } from './objects/rocks/rock.js';
import { CharacterController } from './characters/character-controller.js';
import { backgroundImage } from './misc/background.js';

let game = new Game( {

    element: document.getElementById( 'game' ),
    width: 960,
    height: 480,
    backgroundImage: backgroundImage
} );


let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 128,
    y: 128,
    zIndex: 2,
    width: 196,
    height: 197.5,
} );

let rockLayer = new Layer( {

    id: 'rock',
    x: 350,
    y: 150,
    zIndex: 2,
    width: 120,
    height: 140,
} );

let rock = new Rock( { id: 'rock', layer: rockLayer } );

game.addObject( velo );
game.addObject( rock );
game.init();

let controller = new CharacterController( velo );

controller.init();

window.game = game;
window.velo = velo;


