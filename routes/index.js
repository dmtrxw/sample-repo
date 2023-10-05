const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')
const ProductController = require('../controllers/product')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/products', ProductController.findAll)
router.get('/products/:id', ProductController.findByPk)
router.post('/products', ProductController.create)

module.exports = router
