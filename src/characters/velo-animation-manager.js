import { AnimationManager, SpriteAnimation, StaticSpriteAnimation, AnimationQueue } from '../engine/animation';
import { SpriteImage } from '../engine/sprite';

import walkImageSource from '../assets/walk.png';
import idleImageSource from '../assets/idle.png';
import attackImageSource from '../assets/attack.png';
import jumpImageSource from '../assets/jump.png';

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
 
    let a1 = new SpriteAnimation( { layer: layer, spriteImage: walkSpriteImage } );
    let a2 = new SpriteAnimation( { layer: layer, flip: true, spriteImage: walkSpriteImage } );
    let idleLeftAnimation = new SpriteAnimation( { layer: layer, spriteImage: idleSpriteImage } );
    let idleRightAnimation = new SpriteAnimation( { layer: layer, flip: true, spriteImage: idleSpriteImage } );

    let jumpImage = new Image();
    jumpImage.src = jumpImageSource;

    // 50 * 7 = 350 ms
    let jumpStartSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 0, 6 ]
    } );

    // 50 * 4 = 200 ms;
    let jumpEndSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 8, 11 ]
    } );

    // Should be time of ( stay + bounce - 350 - 250 - delay ) = 300 + 1000 - 350 - 200 - 50 = 700
    let jumpMiddleSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ]
    } );

/* Jump animations ********************************************************************************/

    let jumpMiddleDuration = 500;

    let jumpLeftStartAnimation = new SpriteAnimation( {

        layer: layer, 
        repeat: false, 
        spriteImage: jumpStartSpriteImage,
    } );

    // Refer to jumpMiddleSpriteImage comments
    let jumpLeftMiddleAnimation = new StaticSpriteAnimation( { 

        layer: layer, 
        repeat: false, 
        spriteImage: jumpMiddleSpriteImage,
        sliceIndex: 7,
        duration: jumpMiddleDuration,
    } );

    let jumpLeftEndAnimation = new SpriteAnimation( { 

        layer: layer,
        repeat: false,
        spriteImage: jumpEndSpriteImage,
    } )


    let jumpRightStartAnimation = new SpriteAnimation( {

        layer: layer, 
        repeat: false,
        flip: true,
        spriteImage: jumpStartSpriteImage, 
    } );

    let jumpRightMiddleAnimation = new StaticSpriteAnimation( { 

        layer: layer, 
        repeat: false, 
        spriteImage: jumpMiddleSpriteImage,
        sliceIndex: 7,
        duration: jumpMiddleDuration,
        flip: true
    } );

    let jumpRightEndAnimation = new SpriteAnimation( { 

        layer: layer,
        repeat: false,
        spriteImage: jumpEndSpriteImage,
        flip: true,
    } );


    let jumpLeftAnimationQueue = new AnimationQueue( {

        id: 'jump-left',
        animations: [ 

            jumpLeftStartAnimation, 
            jumpLeftMiddleAnimation, 
            jumpLeftEndAnimation, 
            idleLeftAnimation 
        ]

    } );

    let jumpRightAnimationQueue = new AnimationQueue( {

        id: 'jump-right',
        animations: [

            jumpRightStartAnimation, 
            jumpRightMiddleAnimation, 
            jumpRightEndAnimation, 
            idleRightAnimation 
        ]
    } );

    animationManager.addQueueByAnimation( { qid: 'walk-left', animation: a1 } );
    animationManager.addQueueByAnimation( { qid: 'walk-right', animation: a2 } );
    animationManager.addQueueByAnimation( { qid: 'idle-left', animation: idleLeftAnimation } );
    animationManager.addQueueByAnimation( { qid: 'idle-right', animation: idleRightAnimation } );
    animationManager.addQueue( jumpLeftAnimationQueue );
    animationManager.addQueue( jumpRightAnimationQueue );

    return animationManager;
}

export {

    createAnimationManager,
}