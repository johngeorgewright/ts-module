// @ts-check

/**
 * @type {import('npm:semantic-release').Options}
 */
module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        publish:
          '[ $(cat deno.json | jq -r .private) != "true" ] && deno publish --version ${nextRelease.version}',
      },
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
}
