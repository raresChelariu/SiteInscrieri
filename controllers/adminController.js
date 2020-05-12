const HttpStatus = require('http-status-codes')

exports.getForms = async (req, res) => {
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

exports.getFormsByEmail = async (req, res) => {
  try {
    const { email } = req.params
    const forms = await req.db.Form.find({ email: { $regex: email, $options: 'si' } })

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

exports.getFormsByName = async (req, res) => {
  try {
    const { name } = req.params
    const forms = await req.db.Form.find({ $or: [
      { nume: { $regex: name, $options: 'si' } },
      { prenume: { $regex: name, $options: 'si' } }
    ]})

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