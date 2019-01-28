import { AnimationManager, SpriteAnimation } from './engine/animation';
import { SpriteImage } from './engine/sprite';

import walkImageSource from './assets/walk.png';
import idleImageSource from './assets/idle.png';
import attackImageSource from './assets/attack.png';
import jumpImageSource from './assets/jump.png';

function createAnimationManager( layer ) {

    let animationManager = new AnimationManager();
    let spriteSliceWidth = 196;
    let spriteSliceHeight = 197.5;

    let walkImage = new Image();
    walkImage.src = walkImageSource;

    let walkSpriteImage = new SpriteImage( { 

        image: walkImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 4 ]
    } );

    let idleImage = new Image();
    idleImage.src = idleImageSource;

    let idleSpriteImage = new SpriteImage( { 

        image: idleImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 5 ]
    } );

    let jumpImage = new Image();
    jumpImage.src = jumpImageSource;

    let jumpSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 0, 5 ]
    } );
 
    let a1 = new SpriteAnimation( { layer: layer, spriteImage: walkSpriteImage } );
    let a2 = new SpriteAnimation( { layer: layer, flip: true, spriteImage: walkSpriteImage } );
    let a3 = new SpriteAnimation( { layer: layer, spriteImage: idleSpriteImage } );
    let a4 = new SpriteAnimation( { layer: layer, flip: true, spriteImage: idleSpriteImage } );

    let a5 = new SpriteAnimation( {

        layer: layer, 
        repeat: false, 
        spriteImage: jumpSpriteImage, 
        
    } );
    
    let a6 = new SpriteAnimation( {

        layer: layer, 
        repeat: false, 
        flip: true, 
        spriteImage: jumpSpriteImage, 
    } );

    animationManager.addQueueByAnimation( { qid: 'walk-left', animation: a1 } );
    animationManager.addQueueByAnimation( { qid: 'walk-right', animation: a2 } );
    animationManager.addQueueByAnimation( { qid: 'idle-left', animation: a3 } );
    animationManager.addQueueByAnimation( { qid: 'idle-right', animation: a4 } );
    animationManager.addQueueByAnimation( { qid: 'jump-left', animation: a5 } );
    animationManager.addQueueByAnimation( { qid: 'jump-right', animation: a6 } );


    return animationManager;
}

export {

    createAnimationManager,
}