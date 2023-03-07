module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'logical-properties-and-values': false
      }
    }),
  ],
}
