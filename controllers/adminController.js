const HttpStatus = require('http-status-codes')

exports.getAllForms = async (req, res) => {
  try {
    const forms = await req.db.Form.find()

    return res.status(HttpStatus.OK).json({
      success: true,
      forms
    })
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something bad happened!'
    })
  }
}

exports.getApplicants = async (req, res) => {
  try {
    const forms = await req.db.Form.find()
    const applicants = []
    
    for (form of forms) {
      applicants.push({
        nume: form.nume,
        prenume: form.prenume,
        email: form.email
      })
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      applicants
    })
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something bad happened!'
    })
  }
}