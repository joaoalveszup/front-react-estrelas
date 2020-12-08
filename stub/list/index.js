const mock = require('./mock')

const getItems = {
  method: 'GET',
  path: '/list',
  handler: () => mock.getItems,
}

module.exports = {
  getItems,
}