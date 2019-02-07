const ObjectManager = require( '../../object-manager' ).ObjectManager;

class GameEventManager extends ObjectManager {

    constructor( gameObjectManager ) {

        super();
        this.gameObjectManager = gameObjectManager;
    }

    run() {

        let objects = this.gameObjectManager.getObjects();

        for ( let i = 0 ; i < this.containers.length; i ++ ) {

            let gameEvent = this.containers[ i ].object;
            gameEvent.happen( objects );
        }
    }
}

module.exports = {

    GameEventManager
}
