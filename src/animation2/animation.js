class Animation {

    constructor( { layer = null, imageSlices = [] } = {} ) {

        this.layer = layer;
        this.imageSlices = imageSlices;
        this.sliceCount = 0;
    }

    run( { interval = 50, repeat = true } = {} ) {

        let timerId = setInterval( () => { 

            this.layer.imageSlice = this.imageSlices[ this.sliceCount ];

            if ( this.sliceCount < this.imageSlices.length - 1 ) {

                this.sliceCount ++;
            }
            else {

                if ( repeat === false ) {

                    clearInterval( timerId );
                }
                else {

                    this.sliceCount = 0;
                }
                
            }

        }, interval )
    }
}