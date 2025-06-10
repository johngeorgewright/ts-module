import { assertEquals } from 'jsr:@std/assert'
import { tsModule } from '@johngeorgewright/ts-module'

Deno.test('tsModule', async (t) => {
  await t.step('returns a static string', () => {
    assertEquals(tsModule(), 'I am a TypeScript module')
  })
})
