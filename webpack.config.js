module.exports = {
  mode: "development",
  target: "web", // or node
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/build',
    publicPath: "/js/",
  },
  node: {
   fs: "empty",
   net: "empty",
  },
};


