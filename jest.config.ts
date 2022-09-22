import { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
}

export default config
