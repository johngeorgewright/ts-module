# @johngeorgewright/ts-module

This is a template repository for creating a NPM package with TypeScript.

## Setting up

1. Change all references of `ts-module` to your new package name
1. Remove the `private` property from `package.json`

## I'm not interesting in the zero installation / Yarn / PnP thing. I'd prefer to use just NPM.

1. When using this template choose to include **all** the branches
1. Clone your project
1. Use the `npm` branch: `git checkout npm`
1. Delete the `master` branch: `git branch -D master`
1. Recreate the master branch with the npm branch: `git checkout -b master`
1. Delete the `npm` branch: `git branch -D npm`
1. Force push your changes: `git push origin master -f`
1. And delete the npm branch on the remote: `git push origin :npm`

Now follow the steps in "Setting up".
