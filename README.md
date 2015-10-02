eslint-config-ta-webapp
=======================

Reusable [eslint](http://www.eslint.org) config for TA web apps.

```
$ npm i eslint-config-ta-webapp -D
```

Then add a [`.eslintrc`](http://eslint.org/docs/user-guide/configuring.html) in the root of your project:
```json
{
  "extends": "ta-webapp"
}
```

In `/test` add another [`.eslintrc`](http://eslint.org/docs/user-guide/configuring.html):
```json
{
  "extends": "ta-webapp/lib/tests"
}
```
>Adds sane overrides for testing. Like, mocha/sinon/chai globals, more liberal nesting, etc.


## Support

- React
- JSX
- JSDoc
- Mocha
- ES6/7/Future
...and more
