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
  "extends": [
    "ta",
    "ta/(backend|frontend)"
  ]
}
```

At the root of each group (e.g. `ta`, `ta/(frontend|backend)`) is an `index.js` file that will select the appropriate
configuration file based on the current `NODE_ENV`. For example, where your `.eslintrc` is:

```json
{
  "extends": [
    "ta",
    "ta/frontend"
  ]
}
```

When you run `NODE_ENV=production eslint . ./`, `eslint-config-ta` will handle extending the correct configuration
files, so under the hood it looks like this:

```json
{
  "extends": [
    "ta/organization/production",
    "ta/frontend/production"
  ]
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
