process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  'extends': process.env.NODE_ENV === 'development'
    ? ['ta/backend/development']
    : ['ta/backend/production'],
}
