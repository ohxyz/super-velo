/**
 *
 */


let walkSprite = new Image();
walkSprite.src = '/assets/walk.png';

let walkSpriteImage = new SpriteImage( { 

    image: walkSprite,
    sliceWidth: 196,
    sliceHeight: 197.5,
    matrix: [ 4, 4 ]
} );

let walkSlices = walkSpriteImage.slice();




class Character {

    constructor( { layer, sprites } ) {

        this.layer = layer;
        this.sprites = sprites;

    }

    walkLeft( step ) {

        this.layer.shouldFlipImage = false;
        this.layer.x -= step;
        this.walk();
    }
    
    walkRight( step ) {

        this.layer.shouldFlipImage = true;
        this.layer.x += step;
        this.walk();
    }

    walk() {

        let walkAnimation = new Animation( { layer: this.layer, imageSlices: walkSlices } )
        walkAnimation.run( { repeat: false } );

    }

    jumpPrepare() {

        let height = 10;
        let count = 0;
        let total = 3;

        let timerId = setInterval( () => { 

            if ( count < total ) {

                this.layer.y -= height;
                count ++;
            }
            else {

                clearInterval( timerId );
            }

        }, 1000 )
    }
}

