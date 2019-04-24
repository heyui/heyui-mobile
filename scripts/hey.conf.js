module.exports = {
  root: "dist",
  webpack: {
    umd: {
      entry: "./src/index.js",
      library: "HeyUI",
      filename: 'index.js'
    }
  }
};
