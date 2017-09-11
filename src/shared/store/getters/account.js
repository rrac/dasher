import R from 'ramda'
import { account } from 'store/lenses'

export default {
  ids: R.view(account.ids),
  data: R.view(account.data),
  loading: R.view(account.loading),
  recentActivity: R.memoize(
    state => R.compose(
      ids => {
        const hash = R.view(account.data, state)

        const createDataObj = id => R.compose(
          R.merge({ id }),
          R.flip(R.prop)(hash)
        )(id)

        return ids.map(createDataObj)
          .map(({ text, ...data }) => ({
            ...data,
            content: text,
          }))
      },
      R.take(5),
      R.view(account.ids)
    )(state)
  )
}
