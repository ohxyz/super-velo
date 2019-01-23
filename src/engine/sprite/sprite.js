/**
 * Sprite
 */

class SpriteImage {

    constructor( { image, sliceWidth, sliceHeight, matrix, range, multiple } ) {

        this.image = image;
        
        this.sliceWidth = sliceWidth;
        this.sliceHeight = sliceHeight;
        this.countInRows = matrix[ 0 ];
        this.countInCols = matrix[ 1 ];
        this.startIndex = range === undefined ? 0 : range[ 0 ];
        this.endIndex = range === undefined ? this.countInRows * this.countInCols - 1 : range[ 1 ];
        this.multiple = multiple === undefined ? 1 : multiple;

        this.spriteItems = [];
    }

    slice() {

        for ( let i = this.startIndex; i <= this.endIndex; i ++  ) {

            let indexInRow = i % this.countInRows;
            let indexInCol = Math.floor( i / this.countInRows );

            let item = new ImageSlice( { 

                image: this.image,
                x: this.sliceWidth * indexInRow,
                y: this.sliceHeight * indexInCol,
                width: this.sliceWidth,
                height: this.sliceHeight
            } )

            for ( let j = 0; j < this.multiple; j ++ ) {

                this.spriteItems.push( item );
            }
        }

        return this.spriteItems;
    }
}

class ImageSlice { 

    constructor( { image, x, y, width, height } ) {

        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export {

    SpriteImage
};