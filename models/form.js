const { Schema, model } = require('mongoose')

const formSchema = new Schema({
    nume: {
        type: String,
        required: true
    },
    prenume: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefon: {
        type: String,
        required: true
    },
    facultatea: {
        type: String,
        required: true
    },
    anulDeStudiu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    calitate: {
        type: String,
        required: true
    },
    motivInscriere: {
        type: String,
        required: true
    }
})

module.exports = model('forms', formSchema);