module.exports = {
  extends: process.env.NODE_ENV === 'development'
    ? './development.js'
    : './production.js',
}
