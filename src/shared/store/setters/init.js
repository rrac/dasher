import R from 'ramda'
import actions from 'store/actions'
import * as lenses from 'store/lenses'
import { set } from 'store/utils'

const createSliceFor = key => (_, state) => R.merge(
  state,
  { [key]: {
    ids: [],
    data: {},
    loading: true,
  }}
)

export default {
  [actions.init]: [
    set(lenses.root).with(createSliceFor('trades')),
    set(lenses.root).with(createSliceFor('account'))
  ]
}