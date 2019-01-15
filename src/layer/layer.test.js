console.log( 'Layer module' );

let gameElement = document.getElementById( 'game' );
let width = 960;
let height = 480;

gameElement.width = 960;
gameElement.height = 480;
let gameContext = gameElement.getContext( '2d' );


let backgroundImage = new Image();
backgroundImage.src = '/assets/background-dev.png';

let veloIdleSprite = new Image();
veloIdleSprite.src = '/assets/idle.png';

let veloJumpSprite = new Image();
veloJumpSprite.src = '/assets/jump.png';

let veloWalkSprite = new Image();
veloWalkSprite.src = '/assets/walk.png';

class BackgroundLayer extends Layer {

    draw( context ) {

        let pattern = context.createPattern( backgroundImage, 'repeat' );
        context.fillStyle = pattern;
        context.fillRect( this.x, this.y, this.width, this.height );
    }
}

const NONE = 10;
const WALK = 11;
const JUMP = 12;
const IDLE = 13;


class Velo extends Layer {

    constructor( object ) {

        super( object );

        this.image = null;
        this.shouldRepeat = true;
        this.shouldInterupt = true;

        this.currentDrawing = NONE;
    }

    startDrawing( drawingName, spriteImage ) {

        this.currentDrawing = drawingName;
        this.image = spriteImage.image;
        this.imageSlices = spriteImage.slice();
        this.countOfImageSlices = 0;
        this.totalOfImageSlices = this.imageSlices.length;
    }

    moveLeft( step ) {

        if ( this.currentDrawing !== WALK ) {

            this.walk();
        }

        this.moveTo( this.x - step, this.y );
    }

    moveRight( step ) {

        if ( this.currentDrawing !== WALK ) {

            this.walk();
        }

        this.moveTo( this.x + step, this.y );
    }

    walk() {

        let image = new SpriteImage( { 

            image: veloWalkSprite,
            sliceWidth: this.width,
            sliceHeight: this.height,
            matrix: [ 4, 4 ]
        } );

        this.startDrawing( WALK, image );
    }

    jump() {

        let image = new SpriteImage( {

            image: veloJumpSprite, 
            sliceWidth: this.width,
            sliceHeight: this.height,
            matrix: [ 4, 3 ]
        } );

        this.startDrawing( JUMP, image );
    }

    idle() {

        let image = new SpriteImage( {

            image: veloIdleSprite, 
            sliceWidth: this.width,
            sliceHeight: this.height,
            matrix: [ 4, 5 ]
        } );

        this.startDrawing( IDLE, image );
    }

    draw( context ) {

        if ( this.image === null ) {

            return;
        }

        context.drawImage(

            this.image, 
            this.imageSlices[ this.countOfImageSlices ].x,
            this.imageSlices[ this.countOfImageSlices ].y,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );

        if ( this.countOfImageSlices < this.totalOfImageSlices -1 ) {

            this.countOfImageSlices ++;
        }
        else {

            this.countOfImageSlices = 0;
        }
    }
}

let lm = new LayerManager( gameContext );

let background = new BackgroundLayer( { 

    id: 'background',
    x: 0,
    y: 0,
    zIndex: 0,
    width: 960,
    height: 480,
    repeat: false,
    context: gameContext
} );


let idleSpriteImage = new SpriteImage( {

    image: veloIdleSprite, 
    sliceWidth: this.width,
    sliceHeight: this.height,
    matrix: [ 4, 5 ]
} );

let velo = new Velo( {

    id: 'velo',
    x: 64,
    y: 64,
    zIndex: 2,
    width: 196,
    height: 197.5,
    context: gameContext,
} );

lm.add( velo );
lm.add( background );

lm.init();



document.body.addEventListener( 'keydown', event => {

    console.log( event.key );

    if ( event.key === 'a' ) {

        velo.moveLeft( 5 );
    }
    else if ( event.key === 'd' ) {

        velo.moveRight( 5 );
    }
} );

document.body.addEventListener( 'keyup', event => {

    if ( event.key === 'a' ) {

        event.preventDefault();

        velo.idle();
    }
} );


