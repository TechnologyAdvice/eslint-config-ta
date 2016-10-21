module.exports = {
  env: {
    browser: true,
    mocha: true,
  },
  extends: [
    'airbnb/rules/react',
  ],
  plugins: [
    'react',
  ],
  rules: {
    /**
     * Errors
     */
    // disallow use of console
    'no-console': 2,
    // disallow use of debugger
    'no-debugger': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [1, 5],

    /**
     * React
     */
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [2, 'never', { allowMultiline: false }],
    // Validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 2,
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // Enforce component methods order
    'react/sort-comp': 0,

    /**
     * Compatibility from 1.0.0 -> 2.0.0 migration, mostly new rules
     * from Airbnb config that conflict with our existing code base.
     */
    // Prevent function creation on each render
    'react/jsx-no-bind': 1, // intended: 2
    'react/prefer-stateless-function': 0,

    /**
     * Style
     */
    // specify the maximum length of a line in your program
    'max-len': [2, 120, 4],
    // require a capital letter for constructors
    'new-cap': 0,
    // require spaces around curly brackets (i.e. in destructuring)
    'object-curly-spacing': [2, 'always'],
  },
}
