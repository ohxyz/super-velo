let ObjectManager = require( '../../object-manager' ).ObjectManager;

class GameEventManager extends ObjectManager {

    constructor() {

        super( arguments );
    }

    run( objects ) {

        for ( let i = 0 ; i < this.containers.length; i ++ ) {

            let gameEvent = this.containers[ i ].object;
            gameEvent.happen( objects );
        }
    }
}

module.exports = {

    GameEventManager
}
