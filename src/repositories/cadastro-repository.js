const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

exports.get = async() => {
    const result = await Cadastro.find({});
    return result;
}

exports.create = async(data) => {
    const cadastro = Cadastro(data)
    await cadastro.save()
} 


exports.update = async(id, data) => {
    await Cadastro.findByIdAndUpdate(id, {
        $set:{

            nomeCompleto: data.nomeCompleto,
            telefone: data.telefone,
            endereco: data.endereco

        }
    })
}