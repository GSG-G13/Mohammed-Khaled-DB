const { join } = require('path')

exports.products = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'products.html'))
}

exports.error404 = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404.html'))
}
