import { expect, test } from 'vitest'
import { tsModule } from '../src/index.js'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
