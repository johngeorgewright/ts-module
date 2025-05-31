import { expect, mock, test } from 'bun:test'
import { mockModule } from './mock'

test('mocking modules', async () => {
  const fn = mock()

  const unmock = await mockModule<typeof import('../src/foo.js')>(
    '../src/foo.js',
    () => ({
      tsModule: fn,
    }),
  )

  const mockedModule = await import('../src/foo.js')
  expect(mockedModule.tsModule).toBe(fn)

  unmock()
  expect(mockedModule.tsModule).not.toBe(fn)
})
