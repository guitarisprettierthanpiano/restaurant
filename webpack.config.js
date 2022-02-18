const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css",
          chunkFilename: "[name].css",
          ignoreOrder: true, // Enable to remove warnings about conflicting order
        }),
    ],

    // entry: "./src/index.tsx",
    entry: {
      bundle: './src/index.tsx',
      observers: './src/observers.js',
    },

    mode: "production",
    devtool: "source-map",
    // mode: "development",
    // devtool: "inline-source-map",

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {        
                test: /\.css$/,        
                use: [MiniCssExtractPlugin.loader, "css-loader"]
                // use: ["style-loader", "css-loader"],
            },       
            {
                test: /\.(mp4|webp)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
            },}
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
            parallel: true,
            minimizerOptions: {
                preset: [
                  "default",
                  {
                    discardComments: { removeAll: true },
                  },
                ],
              },         
          }),
        ],
    },
    
    watch: true,
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
}