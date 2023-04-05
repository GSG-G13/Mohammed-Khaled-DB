const { connection } = require('../config/connection')

const getData = () => {
  return connection.query('SELECT products.name, products.price, products.description, products.image, categories.name FROM products INNER JOIN categories ON products.category_id = categories.id;')
}

module.exports = {
  getData
}
