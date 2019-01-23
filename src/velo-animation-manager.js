import { AnimationManager, SpriteAnimation } from './engine/animation';
import { SpriteImage } from './engine/sprite';

import walkImageSource from './assets/walk.png';
import idleImageSource from './assets/idle.png';
import attackImageSource from './assets/attack.png';

function createAnimationManager( layer ) {

    let animationManager = new AnimationManager();

    let walkImage = new Image();
    walkImage.src = walkImageSource;

    let walkSpriteImage = new SpriteImage( { 

        image: walkImage,
        sliceWidth: 196,
        sliceHeight: 197.5,
        matrix: [ 4, 4 ]
    } );

    let idleImage = new Image();
    idleImage.src = idleImageSource;

    let idleSpriteImage = new SpriteImage( { 

        image: idleImage,
        sliceWidth: 196,
        sliceHeight: 197.5,
        matrix: [ 4, 5 ]
    } );

    let a1 = new SpriteAnimation( { layer: layer, spriteImage: walkSpriteImage } );
    let a2 = new SpriteAnimation( { layer: layer, flip: true, spriteImage: walkSpriteImage } );
    let a3 = new SpriteAnimation( { layer: layer, spriteImage: idleSpriteImage } );
    let a4 = new SpriteAnimation( { layer: layer, flip: true, spriteImage: idleSpriteImage } );

    animationManager.addQueueByAnimation( { qid: 'walk-left', animation: a1 } );
    animationManager.addQueueByAnimation( { qid: 'walk-right', animation: a2 } );
    animationManager.addQueueByAnimation( { qid: 'idle-left', animation: a3 } );
    animationManager.addQueueByAnimation( { qid: 'idle-right', animation: a4 } );

    return animationManager;
}

export {

    createAnimationManager,
}