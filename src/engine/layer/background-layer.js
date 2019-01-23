import { Layer } from './layer.js';

class BackgroundLayer extends Layer {

    constructor( { image, ...object } ) {

        super( object );
        this.image = image;
    }

    draw( context ) {

        let pattern = context.createPattern( this.image, 'repeat' );

        context.fillStyle = pattern;
        context.fillRect( this.x, this.y, this.width, this.height );
    }
}

export {

    BackgroundLayer,
}