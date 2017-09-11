import * as R from 'ramda'

const SET = 'set'
const OVER = 'over'

export const set = lens => ({
  as: value => [lens, R.always(value), SET],
  with: setter => [lens, setter, SET],
  using: setter => [lens, setter, OVER] 
})


export const makeReducer = handlers => {
  return (state, action) => {
    const { type, ...rest } = action

    if (!R.has(type, handlers)) {
      return state
    }
  
    return handlers[type]
      .reduce((s, [lens, setter, method]) => R[method](lens, setter(rest, s), s), state)
  }
}

export const assignChildLens = lens => Object.assign(lens, {
  ids: R.compose(lens, R.lensProp('ids')),
  data: R.compose(lens, R.lensProp('data')),
  loading: R.compose(lens, R.lensProp('loading'))
})

export const makeBasicLens = R.compose(
  assignChildLens,
  R.lensProp
)