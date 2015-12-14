module.exports = {
  'env': {
    'node': true,
    'mocha': true
  },
  'extends': [
    'ta-webapp/organization/base',
  ],
  'globals': {
    'sinon': false,
    'expect': false,
    'should': false
  },
  'rules': {
    /**
     * Style
     */
    // testing lends itself to deeply nested callbacks
    'max-nested-callbacks': 0
  },
};
