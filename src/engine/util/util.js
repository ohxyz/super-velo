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

module.exports = {

    generateRandomColor,
    generateRandomString,
};