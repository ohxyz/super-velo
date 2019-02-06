/**
 * Utils of Layer module
 */

function doOverlap( layer1, layer2 ) {

    if ( layer1.x > layer2.x2 || layer2.x > layer1.x2 ) {

        return false;
    }
    else if ( layer1.y > layer2.y2 || layer2.y > layer1.y2 ) {

        return false;
    }

    return true;
}

module.exports = {

    doOverlap
};