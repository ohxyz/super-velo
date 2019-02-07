/**
 * A utility to manger objects
 */

const util = require( '../util/util.js' );

class ObjectManager {

    constructor() {

        this.containers = [];
        this.loopTimerId = 0;
    }

    add( object, { ...props } = {} ) {

        let objectContainer = new ObjectContainer( { object, ...props } );
        this.containers.push( objectContainer );
    }

    get( idOrIndex ) {

        if ( typeof idOrIndex === 'string' ) {

            return this.getById( idOrIndex );
        }
        else if ( typeof idOrIndex === 'number' ) {

            return this.getByIndex( idOrIndex );
        }
        else {

            throw new Error( 'Argument should only be a string or a number.\n' );
        }
    }

    getById( id ) {

        for ( let i = 0; i < this.containers.length; i ++ ) {

            if ( id === this.containers[ i ].id ) {

                return this.containers[ i ].object;
            }
        }

        return null;
    }

    getByIndex( index ) {

        if ( index < this.containers.length ) {

            return this.containers[ index ].object;
        }

        return null;
    }

    getObjects() {

        return this.containers.map( container => container.object );

    }

    loop( methodName, { args = [], interval = 50 } = {} ) {

        this.loopTimerId = setInterval( () => { 

            this[ methodName ]( ...args );

        }, interval );

    }

    stopLoop() {

        clearInterval( this.loopTimerId );
    }

    // Todo: create a new object and add it to the containers
    create( Class, ...args ) {

        return new Class( ...args );
    }

}

class ObjectContainer {

    constructor( { object, ...props } ) {

        if ( 'id' in props && typeof id === 'string' ) {

            this.id = id;
        }
        else if ( 'id' in object ) {

            this.id = object.id;
        }
        else {

            this.id = util.generateRandomString();
        }

        this.object = object;
        this.className = this.object.constructor.name;

        Object.assign( this, props );
    }
}

module.exports = {

    ObjectContainer,
    ObjectManager
};