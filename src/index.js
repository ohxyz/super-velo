import { UP, RIGHT, DOWN, LEFT } from './engine/constants';
import { SpriteImage } from './engine/sprite';
import { AnimationManager } from './engine/animation';
import { BackgroundLayer, LayerManager, ImageLayer } from './engine/layer';
import { Game } from './engine/game';

import { velo } from './characters/velo.js';
import { CharacterController } from './characters/character-controller.js';
import { backgroundImage } from './background.js';

let game = new Game( {

    element: document.getElementById( 'game' ),
    width: 960,
    height: 480,
    backgroundImage: backgroundImage

} );

game.addObject( velo );
game.init();

let controller = new CharacterController( velo );

controller.init();

window.game = game;
window.velo = velo;


