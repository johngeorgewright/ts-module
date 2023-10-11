import assert from 'node:assert'
import { test } from 'node:test'
import { tsModule } from '../src/index.js'

test("it's a module", () => {
  assert.strictEqual(tsModule(), 'I am a TypeScript module')
})
