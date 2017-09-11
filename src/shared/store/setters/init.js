import actions from 'store/actions'
import * as lenses from 'store/lenses'
import { set, createSliceFor } from 'store/utils'

export default {
  [actions.init]: [
    set(lenses.root).with(createSliceFor('trades')),
    set(lenses.root).with(createSliceFor('account'))
  ]
}