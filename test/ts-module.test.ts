import { tsModule } from '@johngeorgewright/ts-module'

test("it's a module", () => {
  expect(tsModule()).toBe('I am a TypeScript module')
})
