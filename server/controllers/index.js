const express = require('express')
const products = require('./products')

const router = express.Router()

router.post('/create-product', products.addProduct)

module.exports = router
