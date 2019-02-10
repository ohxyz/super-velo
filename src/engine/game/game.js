import { BackgroundLayer, LayerManager } from '../layer';
import { GameObjectManager } from './object';
import { CharacterController } from './character/character-controller.js';

class Game {

    constructor( { element, width, height } ) {

        this.element = element;
        this.width = width;
        this.height = height;

        this.element.width = this.width;
        this.element.height = this.height;
        this.context = this.element.getContext( '2d' );

        this.objectManager = new GameObjectManager();
        this.layerManager = new LayerManager( this.context );
    }

    bindInputDevice( gameObject ) {

        let characterController = new CharacterController( { 

            character: gameObject,
            canvasElement: this.element
        } );

        characterController.init();
    }

    init() {

        this.layerManager.init();
    }

    addLayer( layer ) {

        this.layerManager.add( layer );
    }

    addObject( gameObject ) {

        this.layerManager.add( gameObject.layer );
        this.objectManager.add( gameObject );
    }

    object( id ) {

        return this.objectManager.getById( id );
    }

    objects( query ) {

        return this.objectManager.getObjects( query );
    }
}

export {

    Game
};