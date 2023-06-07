import tsModule from '../src/ts-module.js'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
