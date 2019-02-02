import { generateRandomString } from '../../util/util.js';

class GameEvent {

    constructor( { id = generateRandomString } ) {

        this.id = id;
    }

    // Placehoder for debug
    happen( gameObjects ) {

        gameObjects.forEach( o => console.log( o.id ) );
    }
}

export { GameEvent }