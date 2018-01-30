const path = require('path');
module.exports = {
    watch: true,
    entry: './app/index.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.less$/,  
                include: /node_modules/,  
                loaders: ['less-loader'],
            },
            {
                test: /\.css$/,  
                include: /node_modules/,  
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
}