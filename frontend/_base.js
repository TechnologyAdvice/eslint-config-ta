module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    'defaults/rules/react/airbnb',
  ],
  'plugins': [
    'react',
  ],
  'rules': {
    /**
     * Errors
     */
    // disallow use of console
    'no-console': 2,
    // disallow use of debugger
    'no-debugger': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [1, 5],

    /**
     * React
     */
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [2, 'never', {'allowMultiline': false}],
    // Validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 2,
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // Enforce component methods order
    'react/sort-comp': [2, {
      'order': [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'state',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^(on|handle).+$/',
        '/^get.+$/',
        '/^render.+$/',
        'render',
      ],
    }],

    /**
     * Style
     */
    // specify the maximum length of a line in your program
    'max-len': [2, 120, 4],
    // require a capital letter for constructors
    'new-cap': 0,
  },
}
