import { expect, test } from 'bun:test'
import { tsModule } from '../src/foo.js'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
