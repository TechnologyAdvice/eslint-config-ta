module.exports = {
  'extends': [
    'ta-webapp/organization/development',
    'ta-webapp/frontend/base',
  ],
  'rules': {
    /**
     * Errors
     */
    // disallow use of console
    'no-console': 1,
    // disallow use of debugger
    'no-debugger': 1,
  },
};
