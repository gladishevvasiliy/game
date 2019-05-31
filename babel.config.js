module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@babel/transform-flow-strip-types', '@babel/proposal-object-rest-spread'],
  }
}
