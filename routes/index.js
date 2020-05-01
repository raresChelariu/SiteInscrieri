const router = require('express').Router()
const form = require('./form')
const admin = require('./admin')

router.use('/form', form)
router.use('/admin', admin)

module.exports = router