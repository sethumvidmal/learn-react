// webpack.config.js
import path from 'path';

export default {
    entry: './src/MyButtonComponent.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-component.bundle.js',
        library: 'MyButtonComponent', // This will make your component accessible globally
        libraryTarget: 'umd',         // Universal Module Definition (UMD) allows the component to be consumed in different environments
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    externals: {
        react: 'React',  // Externalize React, so it’s not bundled in
    },
};
