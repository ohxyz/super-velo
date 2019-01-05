
let veloElement = document.getElementById( 'velo' );

let walkLeftAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteSource: '/assets/walk.png',
    spriteMatrix: [ 4, 4 ],
} );

let walkRightAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteSource: '/assets/walk.png',
    spriteMatrix: [ 4, 4 ],
    flip: true
} );

let idleLeftAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteSource: '/assets/idle.png',
    spriteMatrix: [ 4, 5 ],
    speed: 80
} );

let idleRightAnimation = new Animation( { 

    canvasElement: veloElement, 
    width: 196,
    height: 197.5,
    spriteSource: '/assets/idle.png',
    spriteMatrix: [ 4, 5 ],
    speed: 80,
    flip: true
} );


let aman = new AnimationManager();

aman.add( 'walk-left', walkLeftAnimation );
aman.add( 'walk-right', walkRightAnimation );
aman.add( 'idle-left', idleLeftAnimation );
aman.add( 'idle-right', idleRightAnimation );


let velo = new Character( { 

	canvasElement: veloElement,
	width: 196,
	height: 197.5,
	x: 100,
	y: 200,
	animationManager: aman,

} );

