const router = require('express').Router()
const { submitController } = require('../controllers')

router.post('/submit', submitController.submit)

module.exports = router