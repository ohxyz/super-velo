class Animation {

    constructor( { layer = null, interval = 50 } = {} ) {

        this.layer = layer;
        this.animationInterval = interval;

        this.timerId = 0;
        this.isStarted = false;
        this.count = 0;
        
    }

    // Placeholder
    animate() {

        const TOTAL = 20;

        const executor = ( resolve, reject ) => { 

            this.timerId = setInterval( () => {

                if ( this.count < TOTAL ) {

                    this.count ++;
                }
                else {

                    clearInterval( this.timerId );
                    resolve();
                }
                
            }, this.animationInterval );
        };

        return new Promise( executor );
    }

    start() {
 
        if ( this.isStarted ) {

            return;
        }

        this.isStarted = true;
        return this.animate();
    }

    stop() {

        clearInterval( this.timerId );
        clearTimeout( this.timerId );

        this.isStarted = false;
    }
}


export {

    Animation
}