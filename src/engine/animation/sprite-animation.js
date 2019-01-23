import { Animation } from './animation.js';
import { SpriteImage } from '../sprite/sprite.js';

class SpriteAnimation extends Animation { 

    constructor( { repeat = true, spriteImage = null, flip = false, ...object } ) {

        super( object );

        this.sliceCount = 0;
        this.imageSlices = [];
        this.shouldRepeat = repeat;
        this.spriteImage = spriteImage;
        this.shouldFlipImage = flip;

        this.getImageSlices();
    }

    getImageSlices() {

        if ( this.spriteImage === null ||
                this.spriteImage instanceof SpriteImage === false ) {

            throw new Error( '[Velo] SpriteImage not found or not valid.\n' );
        }

        this.imageSlices = this.spriteImage.slice();
    }

    animate() {

        this.layer.shouldFlipImage = this.shouldFlipImage;

        this.timerId = setInterval( () => {

            this.layer.imageSlice = this.imageSlices[ this.sliceCount ];

            if ( this.sliceCount < this.imageSlices.length - 1 ) {

                this.sliceCount ++;
            }
            else {

                if ( this.shouldRepeat === false ) {

                    this.stop();
                }
                else {

                    this.sliceCount = 0;
                }
            }

        }, this.animationInterval );
    }
}

export {

    SpriteAnimation
}