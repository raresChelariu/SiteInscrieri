const router = require('express').Router()
const { adminController } = require('../controllers')

router.get('/forms', adminController.getForms)
router.get('/applicants', adminController.getApplicants)
router.get('/forms/:email', adminController.getFormsByEmail)

module.exports = router