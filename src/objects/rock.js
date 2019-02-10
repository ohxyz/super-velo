import { GameObject } from '../engine/game';
import { Layer } from '../engine/layer';

class Rock extends GameObject {

    constructor( layer ) {

        super( layer );
    }
}

let rockLayer = new Layer( {

    id: 'rock',
    x: 600,
    y: 150,
    zIndex: 2,
    width: 120,
    height: 140,
} );

let rock = new Rock( { id: 'rock', layer: rockLayer } );

export {

    rock
};