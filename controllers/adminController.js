const HttpStatus = require('http-status-codes')

exports.getAllForms = async (req, res) => {
    try {
        const forms = await req.db.Form.find()

        return res.status(HttpStatus.OK).json({
            success: true,
            forms
        })
    } catch(error) {
        req.log.error('Unable to get all forms')
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false
        })
    }
}