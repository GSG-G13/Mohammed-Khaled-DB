const { getData } = require('../database/queries/getProducts')
const { postProduct } = require('../database/queries/addProducts')

exports.getProducts = (req, res) => {
  getData()
    .then(result => {
      res.status(200)
      res.json(result.rows)
    })
    .catch(err => console.log('err:', err))
}

exports.addProduct = (req, res) => {
  const productInfo = req.body
  postProduct(productInfo)
    .then(() => res.redirect('/'))
    .catch(err => console.log('err:', err))
}
