module.exports = {
  'env': {
    'mocha': true,
  },
  'plugins': [
    'mocha',
  ],
  'rules': {
    /**
     * Mocha Plugin
     * https://github.com/lo1tuma/eslint-plugin-mocha
     */
    'mocha/no-exclusive-tests': 1,                    // disallow exclusive mocha tests (fixable)
    'mocha/handle-done-callback': 0,                  // enforces handling of callbacks for async tests
    'mocha/no-synchronous-tests': 0,                  // disallow synchronous tests
  }
};
