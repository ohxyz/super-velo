import { NONE, UP, RIGHT, DOWN, LEFT, IDLE, WALK, JUMP, ATTACK } from '../../engine/constants';
import { ImageLayer } from '../../engine/layer';
import { Velo } from './velo.js';
import UTIL from '../../engine/util/util.js';

let redVeloImageSource = { 

    walk: require( './images/red-velo/walk.png' ),
    idle: require( './images/red-velo/idle.png' ),
    attack: require( './images/red-velo/claw_attack.png' ),
    jump: require( './images/red-velo/jump.png' ),
    die: require( './images/red-velo/die.png' )
};

let redVeloLayer = new ImageLayer( {

    id: 'red-velo',
    x: 128,
    y: 128,
    zIndex: 100,
    width: 196,
    height: 197.5,
    // backgroundColor: UTIL.generateRandomColor()
} );

let redVelo = new Velo( { id: 'red-velo', layer: redVeloLayer, imageSource: redVeloImageSource } );

let yellowVelo = new Velo( { 

    id: 'yellow-velo',

    facing: LEFT,

    layer: new ImageLayer( {

        id: 'yellow-velo',
        x: 400,
        y: 128,
        zIndex: 2,
        width: 196,
        height: 197.5,
        // backgroundColor: UTIL.generateRandomColor()
    } ),

    imageSource: {

        walk: require( './images/yellow-velo/walk.png' ),
        idle: require( './images/yellow-velo/idle.png' ),
        attack: require( './images/yellow-velo/claw_attack.png' ),
        jump: require( './images/yellow-velo/jump.png' ),
        die: require( './images/yellow-velo/die.png' )
    } 

} );

export {

    redVelo,
    yellowVelo
};