const Router = require('express')
const controller  = require('./authController') 
const router = new Router()
const {check} = require('express-validator')
const authMidlware = require('./authMidlware')

router.post('/registration', [
    check('username', 'username').notEmpty(),
    check('password', 'password').isLength({nim: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMidlware, controller.getUsers)

module.exports = router
