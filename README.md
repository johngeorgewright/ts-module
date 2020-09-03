# redux-event

Compose and react upon redux actions

## Installation

```
npm i redux-event
```

## Use

It's recommended to put the middleware creation in a separate file:

```javascript
// ./store/middleware/events.js

import { eventMiddleware } from 'redux-event'

export const {
  before,
  onceBefore,
  after,
  onceAfter,
  onError,
  middleware,
} = eventMiddleware()
```

Then install the middleware:

```javascript
// ./store/index.js

import { applyMiddleware, createStore } from 'redux
import { middleware as eventMiddleware } from './middleware/events'
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(eventMiddleware))
```

Now you can react on all actions that have been dispatched:

```javascript
import { after } from './middleware/events'
import store from '.'

after('ADD_TODO', async (state, action) => {
  await makeRequestToApi()
  store.dispatch({type: 'TODO_ADDED', action.todo})
})
```

## Typescript

For extra type safety add the root state and actions to middleware creation:

```typescript
// ./store/index.ts

export type RootState {
  todos: {...}
}

export type Actions = TodoActions | OtherActions
```

```typescript
// ./store/middleware/events.ts

import { eventMiddleware } from 'redux-event'
import { RootState, Actions } from '..'

export const {
  before,
  onceBefore,
  after,
  onceAfter,
  onError,
  middleware,
} = eventMiddleware<RootState, Actions>()
```

## Listening to events

### before()

Before the state has been reduced.

### after()

After the state has been reduced.

### onError()

**Error will be swallowed** in async listeners and emitted as errors. Catch them here.
