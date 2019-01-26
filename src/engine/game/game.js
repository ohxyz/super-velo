import { BackgroundLayer, LayerManager, ImageLayer } from '../layer';

class Game {

    constructor( { element, width, height, backgroundImage } ) {

        this.element = element;
        this.width = width;
        this.height = height;
        this.backgroundImage = backgroundImage;

        this.element.width = this.width;
        this.element.height = this.height;
        this.context = this.element.getContext( '2d' );
        this.layerManager = new LayerManager( this.context );
    }

    init() {

        let backgroundLayer = new BackgroundLayer( { 

            id: 'background',
            x: 0,
            y: 0,
            zIndex: 0,
            width: this.width,
            height: this.height,
            image: this.backgroundImage
        } );

        this.layerManager.add( backgroundLayer );
        this.layerManager.init();
    }

    addObject( gameObject ) {

        this.layerManager.add( gameObject.layer );
    }
}

export {

    Game
}