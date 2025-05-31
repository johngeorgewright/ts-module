import { mock } from 'bun:test'

/**
 * Bun's module mocking cannot be undone without manual intervention.
 * This is said intervention.
 *
 * @see https://github.com/oven-sh/bun/issues/7823
 * @example
 * ```
 * let unmock: () => void
 *
 * beforeEach(async () => {
 *   unmock = await mockModule('./my-module.js', () => ({ fn1: mock() }))
 * })
 *
 * afterEach(unmock)
 * ```
 */
export async function mockModule<T extends Record<keyof any, unknown>>(
  modulePath: string,
  renderMocks: () => Partial<T>,
): Promise<() => void> {
  const original: T = {
    ...(await import(modulePath)),
  }
  const result: T = {
    ...original,
    ...renderMocks(),
  }
  mock.module(modulePath, () => result)
  return () => mock.module(modulePath, () => original)
}
