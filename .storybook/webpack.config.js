const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories.ts$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre"
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-loader"
          }
        ]
      },
      {
        test: /stories\/.+\/.+component\.ts$/,
        use: [
          {
            loader: path.resolve(__dirname, "../loaders/source-loader.js")
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
