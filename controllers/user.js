const jwt = require('jsonwebtoken')
const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {
    static async register(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.create({
                email,
                password,
            })

            res.status(201).json({
                id: user.id,
                email: user.email,
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({
                    message: 'Email already exists',
                })
            } else if (err.name === 'SequelizeValidationError') {
                // should send validation error as a response
                console.log(err.errors)
            } else {
                console.log(err)
                res.status(500).json({
                    message: 'Internal server error',
                })
            }
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })

            if (!user) {
                // 400 bad request
                res.status(400).json({
                    message: 'Invalid email/password',
                })
            } else {
                const isValidPassword = bcrypt.compareSync(
                    password, // body
                    user.password // database
                )

                if (!isValidPassword) {
                    res.status(400).json({
                        message: 'Invalid email/password',
                    })
                } else {
                    const payload = { id: user.id, email: user.email }
                    const token = jwt.sign(payload, 'goku')

                    res.json({ token })
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserController
