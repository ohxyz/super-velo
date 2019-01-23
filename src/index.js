import { UP, RIGHT, DOWN, LEFT } from './engine/constants';
import { SpriteImage } from './engine/sprite';
import { AnimationManager } from './engine/animation';
import { BackgroundLayer, LayerManager, ImageLayer } from './engine/layer';
import { Game, CharacterController } from './engine/game';

import { Velo } from './velo';

import backgroundImageSource from './assets/background-dev.png';
import walkImageSource from './assets/walk.png';

let backgroundImage = new Image();
backgroundImage.src = backgroundImageSource;

let game = new Game( {

    element: document.getElementById( 'game' ),
    width: 960,
    height: 480,
    backgroundImage: backgroundImage

} );

let veloLayer = new ImageLayer( {

    id: 'velo',
    x: 64,
    y: 64,
    zIndex: 2,
    width: 196,
    height: 197.5,
} )

let velo = new Velo( veloLayer );

game.addLayer( veloLayer );
game.init();

velo.idle();

let controller = new CharacterController( velo );

controller.init();

window.game = game;
window.velo = velo;


