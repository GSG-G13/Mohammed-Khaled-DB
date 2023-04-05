const { connection } = require('../config/connection')

const getData = () => {
  return connection.query('SELECT * FROM products;')
}

module.exports = {
  getData
}
