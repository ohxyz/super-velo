import { Layer } from './layer.js';
import { REFRESH_RATE } from '../constants.js';

class LayerManager {

    constructor( context, refreshRate = REFRESH_RATE ) {

        this.context = context;
        this.refreshRate = refreshRate;
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

        const INTERVAL = Math.floor( 1000 / this.refreshRate );

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

export {

    LayerManager
};