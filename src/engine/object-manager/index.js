/**
 * A utility to manger objects
 */

class ObjectManager {

    constructor() {

        this.objects = [];
        this.loopTimerId = 0;
    }

    add( object ) {

        this.objects.push( object )
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

        for ( let i = 0; i < this.objects.length; i ++ ) {

            if ( id === this.objects[ i ].id ) {

                return this.objects[ i ];
            }
        }

        return null;
    }

    getByIndex( index ) {

        if ( index < this.objects.length ) {

            return this.objects[ index ];
        }

        return null;
    }

    getObjects() {

        return this.objects;
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

export {

    ObjectManager
};