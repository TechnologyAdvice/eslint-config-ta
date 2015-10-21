module.exports = {
  'rules': {
    'max-nested-callbacks': [2, 2],                   // http://eslint.org/docs/rules/max-nested-callbacks
    'indent': [2, 2, {'SwitchCase': 1}],              // http://eslint.org/docs/rules/indent
    'brace-style': [2,                                // http://eslint.org/docs/rules/brace-style
      '1tbs', {
        'allowSingleLine': true
      }],
    'quotes': [
      2, 'single', 'avoid-escape'                     // http://eslint.org/docs/rules/quotes
    ],
    'jsx-quotes': [2, 'prefer-single'],               // http://eslint.org/docs/rules/jsx-quotes
    'camelcase': [2, {                                // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {                            // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],                       // http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                                    // http://eslint.org/docs/rules/eol-last
    'func-names': 0,                                  // http://eslint.org/docs/rules/func-names
    'key-spacing': [2, {                              // http://eslint.org/docs/rules/key-spacing
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {                                  // http://eslint.org/docs/rules/new-cap
      'newIsCap': true
    }],
    'no-multiple-empty-lines': [2, {                  // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 1
    }],
    'no-nested-ternary': 2,                           // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,                               // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,                              // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,                          // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': 0,                             // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0,                        // http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'],                          // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'],                    // http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],                            // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {                             // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,                        // http://eslint.org/docs/rules/space-after-keywords
    'space-before-blocks': 2,                         // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'],      // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2,                             // http://eslint.org/docs/rules/space-infix-ops
    'object-curly-spacing': [2, 'never'],             // http://eslint.org/docs/rules/object-curly-spacing
    'array-bracket-spacing': [2, 'never'],            // http://eslint.org/docs/rules/array-bracket-spacing
    'computed-property-spacing': [2, 'never'],        // http://eslint.org/docs/rules/computed-property-spacing
    'space-return-throw-case': 2,                     // http://eslint.org/docs/rules/space-return-throw-case
    'spaced-comment': 2,                              // http://eslint.org/docs/rules/spaced-comment
  }
};
