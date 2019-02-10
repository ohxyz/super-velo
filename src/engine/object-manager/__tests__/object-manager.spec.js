const chai = require( 'chai' );
const spies = require('chai-spies');

chai.use( spies );

const expect = chai.expect;

const manager = require( '../index.js' );


describe( 'ObjectManager module', () => {

    it( 'ObjectManager add method and get method', () => { 

        let om = new manager.ObjectManager();

        let o = { id: 'o', foo: 'bar' };

        om.add( o );

        expect( om.objects[ 0 ].id ).to.equal( 'o' );

        let o2 = { id: 'o2', x: 'y' };

        om.add( o2 );

        expect( om.objects[ 1 ].x ).to.equal( 'y' );

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

    it( 'spy #get', () => { 

        let om = new manager.ObjectManager();
        let spy = chai.spy.on( om, 'get' );

        om.get( 1 );
        expect( spy ).to.have.been.called.with( 1 );

    } )

    it( 'call 3 times of #get from #loop', done => { 

        let om = new manager.ObjectManager();
        let spy = chai.spy.on( om, 'get' );

        om.loop( 'get', { interval: 100, args: [ 2 ] } );

        setTimeout( () => { 

            expect( spy ).to.have.been.called.exactly( 3 ).with( 2 );
            om.stopLoop();
            done();

        }, 310 )

    } )


} );
