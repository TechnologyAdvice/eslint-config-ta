eslint-config-ta-webapp
=======================

Reusable [ESlint](http://www.eslint.org) config for TA web apps.

## Install

```
npm install eslint-config-ta-webapp --save-dev
```
## Usage

### /.eslintrc

```json
{
  "extends": "ta-webapp"
}
```

### /test/.eslintrc

```json
{
  "extends": "ta-webapp/lib/tests"
}
```
>Sane overrides for testing. Like, mocha/sinon/chai globals, more liberal nesting, etc.


## Support

- React
- JSX
- JSDoc
- Mocha
- ES6/7/Future

...and more
