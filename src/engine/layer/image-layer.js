import { Layer } from './layer.js';

class ImageLayer extends Layer {

    constructor( { imageSlice = null, flip = false, ...object } ) {

        super( object );

        this.imageSlice = imageSlice;
        this.shouldFlipImage = flip;
    }

    draw( context ) {

        if ( this.imageSlice === null ) {

            return;
        }

        if ( this.shouldFlipImage === true ) {

            context.translate( this.width + this.x * 2, 0 );
            context.scale( -1, 1 );
        }
        else {

            context.translate( 0, 0 );
            context.scale( 1, 1 );
        }

        context.fillStyle = 'green';
        context.fillRect( this.x, this.y, this.width, this.height );

        context.drawImage(

            this.imageSlice.image, 
            this.imageSlice.x,
            this.imageSlice.y,
            this.imageSlice.width,
            this.imageSlice.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

export {

    ImageLayer
};