module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'node': true,
    'mocha': true,
    'browser': true
  },
  'plugins': [
    'mocha',
    'react'
  ],
  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': true,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralDuplicateProperties': true,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    'jsx': true,
  },
  'rules': {
    /**
     * Mocha Plugin
     * https://github.com/lo1tuma/eslint-plugin-mocha
     */
    'mocha/no-exclusive-tests': 1,            // disallow exclusive mocha tests (fixable)
    'mocha/handle-done-callback': 0,          // enforces handling of callbacks for async tests
    'mocha/no-synchronous-tests': 0,          // disallow synchronous tests

    /**
     * React Plugin
     * https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
     */
    'react/display-name': 0,                  // Prevent missing displayName in a React component definition
    'react/jsx-boolean-value': 0,             // Enforce boolean attributes notation in JSX
    'react/jsx-closing-bracket-location': 2,  // Validate closing bracket location in JSX
    'react/jsx-curly-spacing': 2,             // Enforce or disallow spaces inside of curly braces in JSX attributes.
    'react/jsx-indent-props': [2, 2],         // Validate props indentation in JSX
    'react/jsx-max-props-per-line': 0,        // Limit maximum of props on a single line in JSX
    'react/jsx-no-duplicate-props': 2,        // Prevent duplicate properties in JSX
    'react/jsx-no-literals': 0,               // Prevent usage of unwrapped JSX strings
    'react/jsx-no-undef': 0,                  // Disallow undeclared variables in JSX
    'react/jsx-sort-prop-types': 2,           // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-props': 0,                // Enforce props alphabetical sorting
    'react/jsx-uses-react': 2,                // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,                 // Prevent variables used in JSX to be incorrectly marked as unused
    'react/no-danger': 1,                     // Prevent usage of dangerous JSX properties
    'react/no-did-mount-set-state': 1,        // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state': 1,       // Prevent usage of setState in componentDidUpdate
    'react/no-multi-comp': 1,                 // Prevent multiple component definition per file
    'react/no-set-state': 1,                  // Prevent usage of setState
    'react/no-unknown-property': 1,           // Prevent usage of unknown DOM property
    'react/prop-types': 2,                    // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 2,            // Prevent missing React when using JSX
    'react/require-extension': [1, {          // Restrict file extensions that may be required
      'extensions': ['.js']
    }],
    'react/self-closing-comp': 2,             // Prevent extra closing tags for components without children
    'react/sort-comp': 2,                     // Enforce component methods order
    'react/wrap-multilines': 1,               // Prevent missing parentheses around multiline JSX

    /**
     * Strict mode
     */
    'strict': [2, 'never'],

    /**
     * JSDoc
     */
    'valid-jsdoc': [2, {             // http://eslint.org/docs/rules/valid-jsdoc
      'requireParamDescription': true,
      'requireReturn': false
    }],
    'require-jsdoc': 0,              // http://eslint.org/docs/rules/require-jsdoc

    /**
     * ES6
     */
    'no-var': 0,                     // http://eslint.org/docs/rules/no-var

    /**
     * Variables
     */
    'no-shadow': 0,                  // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'none'
    }],
    'no-use-before-define': 2,       // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Possible errors
     */
    'comma-dangle': [0, 'never'],    // http://eslint.org/docs/rules/comma-dangle
    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
    'no-console': 1,                 // http://eslint.org/docs/rules/no-console
    'no-debugger': 1,                // http://eslint.org/docs/rules/no-debugger
    'no-alert': 1,                   // http://eslint.org/docs/rules/no-alert
    'no-constant-condition': 1,      // http://eslint.org/docs/rules/no-constant-condition
    'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 2,      // http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2,               // http://eslint.org/docs/rules/no-obj-calls
    'no-reserved-keys': 0,           // http://eslint.org/docs/rules/no-reserved-keys
    'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
    'no-unreachable': 2,             // http://eslint.org/docs/rules/no-unreachable
    'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
    'block-scoped-var': 2,           // http://eslint.org/docs/rules/block-scoped-var
    'no-path-concat': 0,             // http://eslint.org/docs/rules/no-path-concat

    /**
     * Best practices
     */
    'consistent-return': 2,          // http://eslint.org/docs/rules/consistent-return
    'curly': [2, 'multi-line'],      // http://eslint.org/docs/rules/curly
    'default-case': 2,               // http://eslint.org/docs/rules/default-case
    'dot-notation': [2, {            // http://eslint.org/docs/rules/dot-notation
      'allowKeywords': true
    }],
    'eqeqeq': 2,                     // http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 2,               // http://eslint.org/docs/rules/guard-for-in
    'no-caller': 2,                  // http://eslint.org/docs/rules/no-caller
    'no-else-return': 2,             // http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2,                 // http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2,           // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2,              // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2,             // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2,        // http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2,            // http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2,             // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2,               // http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2,               // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2,                     // http://eslint.org/docs/rules/no-new
    'no-new-func': 2,                // http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2,            // http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 2,          // http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2,                   // http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2,              // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2,            // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2,               // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2,           // http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2,                    // http://eslint.org/docs/rules/no-with
    'radix': 2,                      // http://eslint.org/docs/rules/radix
    'vars-on-top': 0,                // http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [2, 'any'],         // http://eslint.org/docs/rules/wrap-iife
    'yoda': 2,                       // http://eslint.org/docs/rules/yoda

    /**
     * Style
     */
    'max-len': [2, 120, 4],          // http://eslint.org/docs/rules/max-len
    'max-depth': [2, 3],             // http://eslint.org/docs/rules/max-depth
    'max-nested-callbacks': [2, 2],  // http://eslint.org/docs/rules/max-nested-callbacks
    'indent': [2, 2, {'SwitchCase': 1}],  // http://eslint.org/docs/rules/indent
    'brace-style': [2,               // http://eslint.org/docs/rules/brace-style
      '1tbs', {
        'allowSingleLine': true
      }],
    'quotes': [
      2, 'single', 'avoid-escape'    // http://eslint.org/docs/rules/quotes
    ],
    'jsx-quotes': [2, 'prefer-single'],  // http://eslint.org/docs/rules/jsx-quotes
    'camelcase': [2, {               // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {           // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],      // http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                   // http://eslint.org/docs/rules/eol-last
    'func-names': 0,                 // http://eslint.org/docs/rules/func-names
    'key-spacing': [2, {             // http://eslint.org/docs/rules/key-spacing
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {                 // http://eslint.org/docs/rules/new-cap
      'newIsCap': true
    }],
    'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 1
    }],
    'no-nested-ternary': 2,          // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,              // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,             // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': 0,            // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0,       // http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'],         // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'],   // http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],           // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {            // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,       // http://eslint.org/docs/rules/space-after-keywords
    'space-before-blocks': 2,        // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2,            // http://eslint.org/docs/rules/space-infix-ops
    'object-curly-spacing': [ 2, 'never'],       // http://eslint.org/docs/rules/object-curly-spacing
    'array-bracket-spacing': [ 2, 'never'],      // http://eslint.org/docs/rules/array-bracket-spacing
    'computed-property-spacing': [ 2, 'never'],  // http://eslint.org/docs/rules/computed-property-spacing
    'space-return-throw-case': 2,    // http://eslint.org/docs/rules/space-return-throw-case
    'spaced-comment': 2              // http://eslint.org/docs/rules/spaced-comment
  }
};
