/**
 * A utility to manger objects
 */

function generateRandomString() {

    return Math.random().toString( 36 ).replace( /[^a-z]+/g, '' );
}

class ObjectManager {

    constructor() {

        this.objectContainers = [];
    }

    add( object, { id, prop } = { } ) {

        let objectContainer = new ObjectContainer( { id, prop, object } );
        this.objectContainers.push( objectContainer );
    }

    get( id ) {

        for ( let i = 0; i < this.objectContainers.length; i ++ ) {

            if ( id === this.objectContainers[ i ].id ) {

                return this.objectContainers[ i ].object;
            }
        }

        return null;
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
    }
}

module.exports = {

    ObjectContainer,
    ObjectManager
};