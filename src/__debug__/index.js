import { UP, RIGHT, DOWN, LEFT } from '../engine/constants';
import { SpriteImage } from '../engine/sprite';
import { Game } from '../engine/game';
import { ObjectManager, ObjectContainer } from '../engine/object-manager';

import { redVelo, yellowVelo } from '../characters/velos/velos.js';
import { rock } from '../objects/rock.js';
import { backgroundLayer } from '../layers/background.js';

console.log( 'DEUG' );

global.game = new Game( {

    element: document.getElementById( 'game' ),
    width: 960,
    height: 480,
} );

game.addLayer( backgroundLayer );
game.addObject( redVelo );
game.addObject( yellowVelo );

game.addObject( rock );
game.bindInputDevice( redVelo );

game.init();

window.velo = redVelo;
window.ObjectManager = ObjectManager;
window.ObjectContainer = ObjectContainer;

