import { expect, test } from 'vitest'
import { tsModule } from '@johngeorgewright/ts-module/foo'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
