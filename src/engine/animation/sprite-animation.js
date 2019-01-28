import { Animation } from './animation.js';
import { SpriteImage } from '../sprite/sprite.js';

class SpriteAnimation extends Animation { 

    constructor( { repeat = true, spriteImage = null, flip = false, ...object } ) {

        super( object );

        this.sliceCount = 0;
        this.shouldRepeat = repeat;
        this.spriteImage = spriteImage;
        this.shouldFlipImage = flip;

        this.imageSlices = this.sliceImages();
    }

    sliceImages() {

        if ( this.spriteImage === null 
                || this.spriteImage instanceof SpriteImage === false ) {

            throw new Error( '[Velo] SpriteImage not found or not valid.\n' );
        }

        return this.spriteImage.slice();
    }

    animate() {

        this.layer.shouldFlipImage = this.shouldFlipImage;

        const executor = ( resolve, reject ) => {    

            this.timerId = setInterval( () => {

                this.layer.imageSlice = this.imageSlices[ this.sliceCount ];

                if ( this.sliceCount < this.imageSlices.length - 1 ) {

                    this.sliceCount ++;
                }
                else {

                    if ( this.shouldRepeat === false ) {

                        this.stop();
                        resolve();
                    }
                    else {

                        this.sliceCount = 0;
                    }
                }

            }, this.animationInterval );
        };

        return new Promise( executor );
    }
}

export {

    SpriteAnimation
}