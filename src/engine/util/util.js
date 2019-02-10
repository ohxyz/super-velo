/**
 *
 *@see {@link https://www.paulirish.com/2009/random-hex-color-code-snippets/}
 */
function generateRandomColor() {

    return '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );
}


function generateRandomString() {

    return Math.random().toString( 36 ).replace( /[^a-z]+/g, '' );
}


/**
 *
 *@see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 */
function generateRandomInt( min, max ) {

    var min = Math.ceil(min);
    var max = Math.floor(max);

    //The maximum is exclusive and the minimum is inclusive
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

module.exports = {

    generateRandomColor,
    generateRandomString,
    generateRandomInt,
};