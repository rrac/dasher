import { account } from 'store/lenses'

export default {
  ids: R.view(account.ids),
  data: R.view(account.data),
  loading: R.view(account.loading)
}
