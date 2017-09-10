import { always } from 'ramda'

const SET = 'set'
const OVER = 'over'

export const set = lens => ({
  as: value => [lens, always(value), SET],
  with: setter => [lens, setter, SET],
  using: setter => [lens, setter, OVER] 
})
