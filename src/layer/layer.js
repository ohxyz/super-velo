/**
 * Layer module
 */


class Layer {
    
    constructor( { id, x, y, zIndex, width, height } ) {

        this.id = id;
        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.width = width;
        this.height = height;
    }

    moveTo( x, y ) {

        this.x = x;
        this.y = y;
    }

    draw( context ) {


    }
}

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


class LayerManager {

    constructor( context ) {

        this.context = context;
        this.layers = [];
        this.timer = 0;
    }

    /**
     * Get a layer by ID
     */
    get( id ) {

        for ( let i = 0; i < this.layers.length; i ++ ) {

            if ( this.layers[ i ].id === id ) {

                return this.layers[ i ];
            }
        }

        return null;
    }

    sortLayers() {

        this.layers.sort( ( a, b ) => a.zIndex - b.zIndex );
    }

    /**
     * Add a new layer
     *
     * @returns Newly added layer
     */
    add( layer ) {

        this.layers.push( layer );
        this.sortLayers();

        return layer;
    }

    paint() {

        for ( let i = 0; i < this.layers.length; i ++ ) {

            let currentLayer = this.layers[ i ];
            this.drawLayer( currentLayer );
        }
    }

    drawLayer( layer ) {

        this.context.setTransform( 1, 0, 0, 1, 0, 0 );
        layer.draw( this.context );
    }

    init() {

        const INTERVAL = Math.floor( 1000 / REFRESH_RATE );
        console.log( INTERVAL );
        let count = 0;

        this.timer = setInterval( () => { 

            count ++;
            
            this.paint();
            

        }, INTERVAL );
    }

    stop() {

        clearInterval( this.timer );
    }
}