const path = require('path');

module.exports = {
    entry: {
        main: './js/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './js/dist'),
        filename: 'main.js'
        // next line required if we're using HMR (Hot Module Replacement)
       // publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
};
