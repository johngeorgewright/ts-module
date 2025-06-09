// @ts-check

/**
 * @type {import('npm:lint-staged').Configuration}
 */
export default {
  '*.{md,json,js,jsx,ts,tsx,yml,yaml}': [
    'deno fmt',
  ],
}
