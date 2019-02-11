class SpriteImage {

    /**
     * Describe an image with sprite items.
     *
     * @param {Object} object - Contains a list of arguments.
     * @param {Image}  object.image - Image Object
     * @param {number} object.sliceWidth - Width of an ImageSlice object.
     * @param {number} object.sliceWidth - Height of an ImageSlice object.
     * @param {Array}  object.matrix
     * @param {number} object.matrix.0 - Count of items in each row of the sprite image.
     * @param {number} object.matrix.1 - Count of rows of the sprite image.
     * @param {Array}  object.range
     * @param {number} object.range.0 - Start index of the sprite items.
     * @param {number} object.range.1 - Count of sprite items, starting with range.0
     * @param {number} object.multipe - e.g. If multiple is 3, then the same sprite item will be 
     *                                  stored 3 times.
     */
    constructor( { image, sliceWidth, sliceHeight, matrix, range, multiple = 1 } ) {

        this.image = image;
        
        this.sliceWidth = sliceWidth;
        this.sliceHeight = sliceHeight;
        this.countInRows = matrix[ 0 ];
        this.countInCols = matrix[ 1 ];
        this.startIndex = range === undefined ? 0 : range[ 0 ];

        this.endIndex = range === undefined 
                      ? this.countInRows * this.countInCols - 1 
                      : this.startIndex + range[ 1 ] - 1;

        this.multiple = multiple;
    }

    /**
     * Slice the sprite image into image slices(sprite items). 
     *
     * @returns {Array} - Sprite items.
     */
    slice() {

        let spriteItems = [];

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

                spriteItems.push( item );
            }
        }

        return spriteItems;
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

    SpriteImage,
    ImageSlice,
};