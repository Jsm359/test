const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      
      {
        test: /\.js$/i,
        use:[
          "babel-loader",
        ]
      },
      
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1488,
    compress:true
  }  
};

