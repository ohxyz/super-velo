const expect = require( 'chai' ).expect;
const GameEventManager = require( '../game-event-manager.js' ).GameEventManager;
const GameObjectManager = require( '../../object/game-object-manager.js').GameObjectManager;
const GameEvent = require( '../game-event.js' ).GameEvent;

let gameObjectManager = new GameObjectManager();
let gameEventManager = new GameEventManager( gameObjectManager );

let o1 = { a: 1, b: 2 };
let o2 = { b: 3, c: 4 };

gameObjectManager.add( o1 );
gameObjectManager.add( o2 );

class Event1 extends GameEvent {

    happen( objects ) {

        objects[ 0 ].b = 3;
    }
}

let event1 = new Event1();

class Event2 extends GameEvent {

    happen( objects ) {

        objects[ 1 ].b = 4;
    }
}

let event2 = new Event2();

gameEventManager.add( event1 );
gameEventManager.add( event2 );

describe( 'GameEventManager module', () => {

    it( 'should run game events', () => {

        gameEventManager.run();

        expect( gameObjectManager.get( 0 ) ).to.eql( { a: 1, b: 3 } );
        expect( gameObjectManager.get( 1 )  ).to.eql( { b: 4, c: 4 } );

    } )


} );

