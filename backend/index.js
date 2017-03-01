module.exports = {
  extends: require('../env').isDevelopment()
    ? ['./development.js']
    : ['./production.js'],
}
