import { test } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'
import { tsModule } from '../src/foo.ts'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
