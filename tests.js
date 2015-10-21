module.exports = {
  'extends': 'ta-webapp/base',
  'env': {
    'node': true,
    'mocha': true
  },
  'globals': {
    'sinon': false,
    'chai': false,
    'sinonChai': false,
    'expect': false,
    'should': false
  },
  'rules': {
    // testing lends itself to deeply nested callbacks
    'max-nested-callbacks': 0
  },
};
