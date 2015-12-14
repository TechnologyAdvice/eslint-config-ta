eslint-config-ta
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
  "extends": "ta-webapp/tests"
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

## Deployment

After merging any changes into `master`:

```
# get the latest
git checkout master
git pull

# deploy it
npm version <patch|minor|major>
npm run deploy
```

>You'll be prompted for npm creds on deploy, use the shared TA creds.
