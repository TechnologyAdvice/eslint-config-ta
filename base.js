module.exports = {
  'env': {
    'browser': true,
    'node': true,
  },
  'extends': [
    'defaults/configurations/airbnb',
    'ta-webapp/rules/jsdoc',
    'ta-webapp/rules/mocha',
  ],
  'parser': 'babel-eslint',
  'rules': {},
};
