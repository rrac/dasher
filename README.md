## Dasher

> An example application built using lenses for redux interaction

## Developing

```
$ git clone [repo]

$ cd [repo]

$ yarn

$ yarn dev // This should start webpack-dev-server at `localhost:3000`
```

The entry file is `src/entry.jsx`. You can follow the render cycle from there.

## Redux...Lenses...What?

Inside of `src/store` is the actual meat and potatoes of this demo. Instead of `ducks` or `action creators` and `reducers`, we have `actions`, `getters`, `setters`, and `lenses`. These concepts are part and parcel for this paradigm so let's go ahead and define what I mean when I use these words:

* **actions**:
  - These are the string values that are sent under the `type` key in `redux` actions.

* **getters**:
  - These are functions that take global state and return slices of state
  - They can be any function and can/should be memoized but on the user-land side.
  - These are usually calling `R.view` on a `lens` but can involve custom logic.
  - `selectors` from `reselect` equivalent.

* **lenses**:
  - [`Kmett-style lenses`](https://github.com/ramda/ramda-lens)
    - `R.lens(getter, setter)` or `R.lensProp/lensPath`

* **setters**:
  - These are `key`/`value` pairings of `actions` from above and arrays of `HandlerTuples`. 
    - `HandlerTuple`: `[lens, function, "set"/"over"]`
    - There are helper functions for creating `HandlerTuple` called `set`, described below.
  - Responsible for returning a new state but encouraged to do it piece by piece.

### Paradigm

If you look at the folder structure of `src/shared/store`, you will see the basic outline of the paradigm. The overall idea is that the view should not care about the shape of the state and *neither should the setters or getters*. The only part that understands the shape of state are the `lenses` which point towards different slices of state.

This separation of `getters` from the state shape seems to be accepted practice and encouraged throughout the `redux` community ( [`reselect`](https://github.com/reactjs/reselect) ). This paradigm tries to take that separation one step further and say that the `setters`( `reducers` ) of our system should not have to know about the state of shape that they are updating. 

Working with @neezer, finding a common usage of `lenses` appeared. We quickly realized that using `reselect` is the basic interface for creating a `lens`, while using a `lens` allows you to also `set` the values instead of just `select` them. Using `lenses` inside of our `reducers` quickly limited the cognitive overhead when updating/changing a reducer's logic or the shape of state.


## Usage

Recently I had the opportunity to start a simple SPA application from scratch and asked to be able to use the above paradigm of `lenses` as the only way to access state and the results show a whole bunch of promise.

By offering two simple methods, `set` and `createReducer`, this paradigm could be made into a package and used in any `redux` codebase. From here on, let's pretend that it's under `@kofile/redux-lens` and is importable. Using it would be something like this:

```
import { set, createReducer } from '@kofile/redux-lens`
import * as actions from './actions'
import * as lenses from './lenses'

const setters = {
  [actions.init]: [
    set(lenses.root).as({ create: 'base', store: { shape: [] }, isLoading: false }),
    set(lenses.root.loading).using((action, state) => (isLoading) => true),
    set(lenses.shapes.cards.ids).with((action) => action.ids)
  ]
}
```