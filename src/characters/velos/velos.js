const { NONE, UP, RIGHT, DOWN, LEFT, IDLE, WALK, JUMP, ATTACK } = require( '../../engine/constants' );
const { ImageLayer } = require( '../../engine/layer' );
const { Velo } = require( './velo.js' );
const Util = require( '../../engine/util/util.js' );

let redVeloImageSource = { 

    walk: require( './images/red-velo/walk.png' ),
    idle: require( './images/red-velo/idle.png' ),
    attack: require( './images/red-velo/claw_attack.png' ),
    jump: require( './images/red-velo/jump.png' )
};

let redVeloLayer = new ImageLayer( {

    id: 'red-velo',
    x: 128,
    y: 128,
    zIndex: 2,
    width: 196,
    height: 197.5,
    backgroundColor: Util.generateRandomColor()
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
        backgroundColor: Util.generateRandomColor()
    } ),

    imageSource: {

        walk: require( './images/yellow-velo/walk.png' ),
        idle: require( './images/yellow-velo/idle.png' ),
        attack: require( './images/yellow-velo/claw_attack.png' ),
        jump: require( './images/yellow-velo/jump.png' )
    } 

} );

module.exports = {

    redVelo,
    yellowVelo
};