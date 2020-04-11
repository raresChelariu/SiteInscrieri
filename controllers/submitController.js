const HttpStatus = require('http-status-codes')

exports.submit = async (req, res) => {
    try {
        const existingEmail = await req.db.Form.findOne({ email: req.body.email })

        if (existingEmail)
            return res.status(HttpStatus.CONFLICT).json({
                success: false,
                message: 'Email already exists!'
            })

        const existingPerson = await req.db.Form.findOne({ nume: req.body.nume, prenume: req.body.prenume})

        if (existingPerson)
        return res.status(HttpStatus.CONFLICT).json({
            success: false,
            message: 'Person already exists!'
        })

        const form = await req.db.Form.create(req.body)

        return res.json({
            success: true,
            form: req.body
        })
    } catch(error) {
        req.log.error('Unable to submit form')
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false
        })
    }
}