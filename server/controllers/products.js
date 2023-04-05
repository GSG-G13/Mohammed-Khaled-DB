const { postProduct } = require('../database/queries/addProducts')

exports.addProduct = (req, res) => {
  const productInfo = req.body
  postProduct(productInfo)
    .then(() => res.redirect('/'))
    .catch(err => console.log('err:', err))
}
