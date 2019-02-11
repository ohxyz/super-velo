import { UP, RIGHT, DOWN, LEFT } from './engine/constants';
import { SpriteImage } from './engine/sprite';
import { AnimationManager } from './engine/animation';
import { BackgroundLayer, LayerManager, ImageLayer, Layer } from './engine/layer';
import { Game } from './engine/game';
import { ObjectManager, ObjectContainer } from './engine/object-manager';
import { GameEventManager } from './engine/game/event';

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

game.addObject( velo );
game.init();

let controller = new CharacterController( velo );

controller.init();



