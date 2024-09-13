const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({

    nomeCompleto:{
        type: String,
    },
    telefone: {
        type: String,
    },
    endereco: {
        type: String,
    },
    email: {
        type: String,
    }
})
module.exports = mongoose.model('Cadastro', scheme)