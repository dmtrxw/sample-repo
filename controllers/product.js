const { Product } = require('../models')

class ProductController {
    static async findAll(req, res) {
        try {
            const products = await Product.findAll({})
            res.json(products)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal server error',
            })
        }
    }

    static async findByPk(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if (!product) {
                res.status(404).json({
                    message: 'Product not found',
                })
            } else {
                res.json(product)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Internal server error',
            })
        }
    }

    static async create(req, res) {
        try {
            const { name, description } = req.body
            const product = await Product.create({
                name,
                description,
            })

            res.status(201).json(product)
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.status(400).json({
                    message: 'Validation error',
                })
            } else {
                res.status(500).json({
                    message: 'Internal server error',
                })
            }
        }
    }
}

module.exports = ProductController
