const path = require( 'path' );

module.exports = env => {

    let entryPath = path.join( __dirname, 'src/index.js');
    let outputPath = path.join( __dirname, 'src/__debug__' );

    if ( env !== undefined && env.module !== undefined ) {

        let moduleName = env.module;

        entryPath = path.join( __dirname, `src/engine/${moduleName}/__debug__/index.js` );
        outputPath = path.join( __dirname, `src/engine/${moduleName}/__debug__` );
    }

    console.log( '[Entry]   ', entryPath );
    console.log( '[Output]  ', outputPath );

    let moduleRules = [ {

        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: { presets: [ '@babel/preset-env' ] }
        }

    }, {

        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [ {    
                
            loader: 'file-loader',
            options: {
                outputPath: 'images'
            }
        } ]
    } ];

    return {

        mode: 'development',
        entry: entryPath,
        output: {
            path: outputPath,
            filename: 'bundle.js'
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: outputPath,
            compress: true,
            port: 5000,
        },
        module: {
            rules: moduleRules
        }
    }
};