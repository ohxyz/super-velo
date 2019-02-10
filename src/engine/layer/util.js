/**
 * Utils of Layer module
 */

function doOverlap( layer1, layer2, { width = 0, height = 0 } = { width: 0, height: 0 } ) {

    if ( layer1.x > ( layer2.x2 - width ) || layer2.x > ( layer1.x2 - width ) ) {

        return false;
    }
    else if ( layer1.y > ( layer2.y2 - height ) || layer2.y > ( layer1.y2 - height ) ) {

        return false;
    }

    return true;
}

module.exports = {

    LayerUtil: { doOverlap }
};