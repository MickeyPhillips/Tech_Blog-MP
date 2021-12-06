const router = require('express').Router()
const sequelize = require('../config/connection')
//const {}

router.get('/', (req, res) => {
    res.render('homepage')
})
router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router