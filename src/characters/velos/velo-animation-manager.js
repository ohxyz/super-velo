import { 
    AnimationManager, 
    SpriteAnimation, 
    StaticSpriteAnimation, 
    AnimationQueue 
} from '../../engine/animation';

import { SpriteImage } from '../../engine/sprite';

function createVeloAnimationManager( { layer, imageSource = {} } ) {

    let animationManager = new AnimationManager();
    let spriteSliceWidth = 196;
    let spriteSliceHeight = 197.5;

/* Walk images and animations *********************************************************************/

    let walkImage = new Image();
    walkImage.src = imageSource.walk;

    let walkSpriteImage = new SpriteImage( { 

        image: walkImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 4 ]
    } );

    let walkLeftAnimation = new SpriteAnimation( {

        layer: layer, 
        spriteImage: walkSpriteImage 
    } );
    
    let walkRightAnimation = new SpriteAnimation( { 

        layer: layer, 
        flip: true, 
        spriteImage: walkSpriteImage 
    } );

/* Idle images and animations *********************************************************************/

    let idleImage = new Image();
    idleImage.src = imageSource.idle;

    let idleSpriteImage = new SpriteImage( { 

        image: idleImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 5 ]
    } );
 
    let idleLeftAnimation = new SpriteAnimation( {

        layer: layer, 
        spriteImage: idleSpriteImage 
    } );

    let idleRightAnimation = new SpriteAnimation( { 

        layer: layer, 
        flip: true, 
        spriteImage: idleSpriteImage 
    } );


/* Jump images ************************************************************************************/

    let jumpImage = new Image();
    jumpImage.src = imageSource.jump;

    // 50 * 7 = 350 ms
    let jumpStartSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 0, 7 ]
    } );

    // 50 * 4 = 200 ms;
    let jumpEndSpriteImage = new SpriteImage( { 

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 8, 4 ]
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

/* Attack images and animations *******************************************************************/
    
    let attackImage = new Image();
    attackImage.src = imageSource.attack;

    let attackSpriteImage = new SpriteImage( { 

        image: attackImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 2 ]
    } );

    let attackLeftAnimation = new SpriteAnimation( { 
        
        layer: layer, 
        spriteImage: attackSpriteImage, 
        repeat: false,
        interval: 50,
    } );
    
    let attackRightAnimation = new SpriteAnimation( { 

        layer: layer, 
        flip: true, 
        spriteImage: attackSpriteImage, 
        repeat: false,
        interval: 50,
    } );

    let attackLeftAnimationQueue = new AnimationQueue( {

        id: 'attack-left',
        animations: [ 
        
            attackLeftAnimation,
        ]
    } );

    let attackRightAnimationQueue = new AnimationQueue( {

        id: 'attack-right',
        animations: [

            attackRightAnimation,
        ]
    } );


/* Die images and animations **********************************************************************/

    let dieImage = new Image();
    dieImage.src = imageSource.die;

    let dieSpriteImage = new SpriteImage( { 

        image: dieImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 1 ],
        range: [ 1, 3 ]
    } );
 
    let dieLeftAnimation = new SpriteAnimation( {

        layer: layer,
        repeat: false,

        spriteImage: dieSpriteImage 
    } );

    let dieRightAnimation = new SpriteAnimation( { 

        layer: layer, 
        flip: true,
        repeat: false,

        spriteImage: dieSpriteImage 
    } );

    // To make the animtion more fun. Use jump animation before die.
    let jumpSpriteImage = new SpriteImage( {

        image: jumpImage,
        sliceWidth: spriteSliceWidth,
        sliceHeight: spriteSliceHeight,
        matrix: [ 4, 3 ],
        range: [ 0, 9 ]
    } );

    let jumpLeftAnimation = new SpriteAnimation( { 

        layer: layer, 
        repeat: false,
        spriteImage: jumpSpriteImage 
    } )

    let jumpRightAnimation = new SpriteAnimation( { 

        layer: layer, 
        flip: true,
        repeat: false,
        spriteImage: jumpSpriteImage 
    } )

    let dieLeftAnimationQueue = new AnimationQueue( { 

        id: 'die-left',
        animations: [

            jumpLeftAnimation,
            dieLeftAnimation
        ]
    } );

    let dieRightAnimationQueue = new AnimationQueue( { 

        id: 'die-right',
        animations: [

            jumpRightAnimation,
            dieRightAnimation
        ]
    } );

/* Add animations *********************************************************************************/

    animationManager.addQueueByAnimation( { qid: 'walk-left', animation: walkLeftAnimation } );
    animationManager.addQueueByAnimation( { qid: 'walk-right', animation: walkRightAnimation } );
    animationManager.addQueueByAnimation( { qid: 'idle-left', animation: idleLeftAnimation } );
    animationManager.addQueueByAnimation( { qid: 'idle-right', animation: idleRightAnimation } );

    animationManager.addQueue( jumpLeftAnimationQueue );
    animationManager.addQueue( jumpRightAnimationQueue );
    animationManager.addQueue( attackLeftAnimationQueue );
    animationManager.addQueue( attackRightAnimationQueue );

    animationManager.addQueue( dieLeftAnimationQueue );
    animationManager.addQueue( dieRightAnimationQueue );

    return animationManager;
}

export {

    createVeloAnimationManager,
}