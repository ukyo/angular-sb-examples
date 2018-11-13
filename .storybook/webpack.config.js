const path = require("path");

module.exports = {
  module: {
    rules: [
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
        ],
        enforce: "pre"
      }
    ]
  }
};
