const util = require( '../../util/util.js' );

class GameEvent {

    constructor( { id = util.generateRandomString() } = {} ) {

        this.id = id;
    }

    // Placehoder for debug
    happen( objects ) {

        objects.forEach( o => console.log( o.id ) );
    }
}

module.exports = {

    GameEvent 
};
