const manager = require( '../index.js' );

test( 'ObjectContainer constructor', () => {

    let o = { id: 'o', a: 1, b: 'foo' };

    let oc = new manager.ObjectContainer( { object: o } );

    expect( oc.id).toBe( 'o' ); 
    expect( oc.object === o ).toBe( true );
    expect( oc.object.a ).toBe( 1 );

    let oc2 = new manager.ObjectContainer( { id: 'ID', object: o, prop: 'my-prop' } );

    expect( oc2.id ).toBe( 'ID' );
    expect( oc2[ 'my-prop' ] ).toBe( o );
    expect( oc2.object ).toBe( o );

} );

test( 'ObjectManager add method and get method', () => { 

    let om = new manager.ObjectManager();

    let o = { id: 'o', foo: 'bar' };

    om.add( o );

    expect( om.containers[ 0 ].id ).toBe( 'o' );

    let o2 = { x: 'y' };

    om.add( o2, { id: 'o2', prop: 'o2' } );

    expect( om.containers[ 1 ].id ).toBe( 'o2' );
    expect( om.containers[ 1 ].object.x ).toBe( 'y' );
    expect( om.containers[ 1 ].o2.x ).toBe( 'y' );

    let result = om.get( 'o2' );

    expect( result ).toBe( o2 );

    let result2 = om.get( 'bar' );

    expect( result2 ).toBe( null );

} )

test( 'ObjectManager create method', () => { 

    let Foo = class {

        constructor( bar = 1 ) {

            this.bar = bar;
        }
    }

    let om = new manager.ObjectManager( Foo );
    let o = om.create( Foo, 2 );

    expect( o ).toBeInstanceOf( Foo );
    expect( o.bar ).toBe( 2 );

} )