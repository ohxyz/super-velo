import { SpriteAnimation } from './sprite-animation.js';

class StaticSpriteAnimation extends SpriteAnimation {

    /** 
     * 
     * @param {number} duration - Specify milliseconds to display the image slice.
     */
    constructor( { sliceIndex = 0, duration = 1000, ...object } ) {

        super( object );

        this.duration = duration;
        this.sliceIndex = sliceIndex;
    }

    // Todo: Handle when delay is 0.
    animate() {

        setTimeout( () => { 

            this.layer.imageSlice = this.imageSlices[ this.sliceIndex ];

        }, this.animationInterval );


        return new Promise( resolve => { 

            setTimeout( () => resolve(), this.duration );

        } );
    }
}

export {

    StaticSpriteAnimation
};