

let veloIdleSprite = new Image();
veloIdleSprite.src = '/assets/idle.png';

let si = new SpriteImage( { 

    image: veloIdleSprite,
    itemWidth: 196,
    itemHeight: 197.5,
    matrix: [ 4, 5 ]
} )

console.log( si );

si.slice();

