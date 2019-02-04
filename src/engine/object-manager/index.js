/**
 * A utility to manger objects
 */

function generateRandomString() {

    return Math.random().toString( 36 ).replace( /[^a-z]+/g, '' );
}

class ObjectManager {

    constructor() {

        this.containers = [];
    }

    add( object, { id, prop } = {} ) {

        let objectContainer = new ObjectContainer( { id, prop, object } );
        this.containers.push( objectContainer );
    }

    get( id ) {

        for ( let i = 0; i < this.containers.length; i ++ ) {

            if ( id === this.containers[ i ].id ) {

                return this.containers[ i ].object;
            }
        }

        return null;
    }

    getObjects() {

        return this.containers.map( container => container.object );

    }

    // Todo: create a new object and add it to the containers
    create( Class, ...args ) {

        return new Class( ...args );
    }

}

class ObjectContainer {

    constructor( { id, prop, object } ) {

        if ( typeof id === 'string' ) {

            this.id = id;
        }
        else if ( 'id' in object ) {

            this.id = object.id;
        }
        else {

            this.id = generateRandomString();
        }

        if ( typeof prop === 'string' ) {

            this[ prop ] = object;
        }

        this.object = object;
        this.className = this.object.constructor.name;
    }
}

module.exports = {

    ObjectContainer,
    ObjectManager
};