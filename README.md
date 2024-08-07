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

This template is designed to help create libraries that produce both ES and CommonJS modules. It will create both the CommonJS and ESM distribution files.

You must take in to consideration, however, that the CommonJS distribution requires the filenames to have the extension `.cjs` and therefore will be converted automatically. What will **not** be converted automatically, however, is the import statements. For example, imagine you have the following:

```typescript
// src/my-module.ts
export function myFunction() {}
```

```typescript
// src/util.ts
export function myUtil() {}
```

```typescript
// src/index.ts
import { myFunction } from './my-module.js'
import { myUtil } from './util.js'
```

The CommonJS distribution will fail in the above example as `my-module.js` and `util.js` will not exist. Instead they will be `my-module.cjs` nd `util.cjs`.

Therefore, we recommend making use of the `exports` and `imports` feature of the package.json.

```json
{
  "name": "my-package",
  "exports": {
    "./my-module": {
      "import": "./dist/es/my-module.js",
      "require": "./dist/common/my-module.cjs"
    }
  },
  "imports": {
    "#util": {
      "import": "./dist/es/util.js",
      "require": "./dist/common/util.cjs"
    }
  }
}
```

```typescript
// src/index.ts
import { myFunction } from 'my-package/my-module'
import { myUtil } from '#util'
```
