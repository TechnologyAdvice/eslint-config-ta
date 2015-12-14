eslint-config-ta
=======================

[ESlint](http://www.eslint.org) config for TechnologyAdvice.

```
npm i eslint-config-ta -D
```

## Usage

[Extend](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) relevant `ta/*` rules in your 
`.eslintrc`.

**Default**

In the project root:

```json
{
  "extends": "ta/(frontend|backend)/default"
}
```

**Development**

When in development, conditionally run the development config.  npm script example:
```json
{
  "scripts": {
    "lint": "eslint 
  }
}
```

## Example configs

### /.eslintrc

Root config

```json
{
  "extends": "ta/organization/default"
}
```

### /test/.eslintrc

```json
{
  "extends": "ta/organization/test"
}
```

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
