const router = require('express').Router()
const { adminController } = require('../controllers')

router.get('/all_forms', adminController.getAllForms)

module.exports = router