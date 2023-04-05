const dbConnection = require('../config/connection')

const postProduct = productData => {
  // eslint-disable-next-line camelcase
  const { name, price, description, image, category_id } = productData
  const sql = {
    text: 'INSERT INTO products (name, price, description, image, category_id) VALUES ($1, $2, $3, $4, $5);',
    // eslint-disable-next-line camelcase
    values: [name, price, description, image, category_id]
  }
  return dbConnection.query(sql)
}

module.exports = {
  postProduct
}
