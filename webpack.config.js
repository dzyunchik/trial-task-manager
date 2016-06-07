var path = require('path');

/*global module*/
module.exports = [
    {
        entry: './src/client/index.js',
        output: {
            path: __dirname + '/public/js/',
            filename: 'app.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    }
];
