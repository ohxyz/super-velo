const path = require( 'path' );

module.exports = {
    
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join( __dirname, 'dist' ),
        compress: true,
        port: 5000,
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
};