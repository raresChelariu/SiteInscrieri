const router = require('express').Router()
const { adminController } = require('../controllers')

router.get('/forms', adminController.getForms)
router.get('/applicants', adminController.getApplicants)
router.get('/forms/by_email/:email', adminController.getFormsByEmail)
router.get('/forms/by_name/:name', adminController.getFormsByName)

module.exports = router