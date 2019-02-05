
const GameEventManager = require( '../game-event-manager.js' ).GameEventManager;
const GameEvent = require( '../game-event.js' ).GameEvent;

let gameEventManager = new GameEventManager();

let o1 = { a: 1, b: 2 };
let o2 = { b: 3, c: 4 };

let objects = [ o1, o2 ];

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

test( 'GameEventManager run method', () => {

    gameEventManager.run( objects );

    expect( objects[ 0 ] ).toEqual( { a: 1, b: 3 } );
    expect( objects[ 1 ] ).toEqual( { b: 4, c: 4 } );

} )