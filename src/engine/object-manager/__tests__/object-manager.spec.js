const expect = require( 'chai' ).expect;
const manager = require( '../index.js' );

it( 'ObjectContainer constructor', () => {

    let o = { id: 'o', a: 1, b: 'foo' };

    let oc = new manager.ObjectContainer( { object: o } );

    expect( oc.id).to.equal( 'o' ); 
    expect( oc.object === o ).to.equal( true );
    expect( oc.object.a ).to.equal( 1 );

    let oc2 = new manager.ObjectContainer( { id: 'ID', object: o, prop: 'my-prop' } );

    expect( oc2.id ).to.equal( 'ID' );
    expect( oc2[ 'my-prop' ] ).to.equal( o );
    expect( oc2.object ).to.equal( o );

} );

it( 'ObjectManager add method and get method', () => { 

    let om = new manager.ObjectManager();

    let o = { id: 'o', foo: 'bar' };

    om.add( o );

    expect( om.containers[ 0 ].id ).to.equal( 'o' );

    let o2 = { x: 'y' };

    om.add( o2, { id: 'o2', prop: 'o2' } );

    expect( om.containers[ 1 ].id ).to.equal( 'o2' );
    expect( om.containers[ 1 ].object.x ).to.equal( 'y' );
    expect( om.containers[ 1 ].o2.x ).to.equal( 'y' );

    let result = om.get( 'o2' );

    expect( result ).to.equal( o2 );

    let result2 = om.get( 'bar' );

    expect( result2 ).to.equal( null );

} )

it( 'ObjectManager create method', () => { 

    let Foo = class {

        constructor( bar = 1 ) {

            this.bar = bar;
        }
    }

    let om = new manager.ObjectManager( Foo );
    let o = om.create( Foo, 2 );

    expect( o instanceof Foo ).to.equal( true );
    expect( o.bar ).to.equal( 2 );

} )

it( 'ObjectManager getObjects method', () => { 

    let o1 = { foo: 'bar' };
    let o2 = { a: 1 };

    let om = new manager.ObjectManager();

    om.add( o1 );
    om.add( o2 );

    let result = om.getObjects();

    expect( result.length ).to.equal( 2 );
    expect( result[ 1 ].a ).to.equal( 1 );

} )