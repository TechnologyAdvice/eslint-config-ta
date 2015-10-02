module.exports = {
  'extends': 'ta-webapp/lib/defaults',
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
    'max-nested-callbacks': [2, 4]                    // more liberal callbacks for
  },
};
