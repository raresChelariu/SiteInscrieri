const router = require('express').Router()
const { adminController } = require('../controllers')

router.get('/all_forms', adminController.getAllForms)
router.get('/applicants', adminController.getApplicants)

module.exports = router