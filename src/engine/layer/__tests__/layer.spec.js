const expect = require( 'chai' ).expect;
const layer = require( '../layer.js' );

let layer1 = new layer.Layer( { x: 15, y: 15, width: 72, height: 73.9 } );
let layer2 = new layer.Layer( { x: 15, y: 15, width: 72, height: 74 } );

it( 'Get center of a layer', () => {

     expect( layer1.center.x ).to.equal( 51 );
     expect( layer1.center.y ).to.equal( 51 );
     expect( layer2.center.y ).to.equal( 52 );
} );