export default {
  init: '@@INIT',
  trades: {
    request: 'TRADES/REQUEST_TRADES',
    fulfilled: 'TRADES/REQUEST_TRADES_FULFILLED',
    canceled: 'TRADES/REQUESTED_TRADES_CANCELLED',
    reejcted: 'TRADES/REQUESTED_TRADES_REJECTED',
  }
}