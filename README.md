# @johngeorgewright/ts-module

This is a template repository for creating a NPM package with TypeScript.

## Setting up

1. Change all references of `@johngeorgewright/ts-module` to your new package name
1. Also search for references to `@johngeorgewright` & `ts-module` individually
1. Remove the `private` property from `package.json` (if you want to publically publish your module)
1. Search for all references of `secrets.` in the `.github` diectory and make sure you have the appropriate secrets registered in GitHub (Your Repo > Settings > Secrets)
1. Delete the .github/dependabot.yml file (unless you wish to use that instead of renovate)
1. Ammend the LICENSE with your name
1. If your packages are to be published publically, change the publish command in `release.config.js` to `yarn npm publish --access public`

## Dependency management

By default, this project's dependencies is kept up-to-date with [renovate](https://www.mend.io/free-developer-tools/renovate/). This project may also be set-up for dependabot too. To do so:

1. Remove the `renovate.json` file
1. `mv .github/.dependabot.yml .github/dependabot.yml`

## ES & CommonJS Modules

This template is designed to help create libraries that produce both ES and CommonJS modules. To ensure that everything works correctly for parent projects, you must never import using local path protocols (IE `./my-module`). Always reference the fully qualified module that you have referenced in the your `package.json`.

```typescript
// ./src/public/module-1.ts
import '@johngeorgewright/ts-module/module-2'
```

```typescript
// ./src/public/module-2.ts
import '#private/module'
```

```typescript
// ./src/private/module.ts
```
