const express = require('express')
const products = require('./products')
const error = require('./error')

const router = express.Router()

router.get('/products', error.products)
router.get('/products-data', products.getProducts)
router.post('/create-product', products.addProduct)
router.use(error.error404)
module.exports = router
