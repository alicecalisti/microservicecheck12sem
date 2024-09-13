const repository = require('../repositories/cadastro-repository');
const ValidationContract = require('../validator')


exports.get = async(req, res, next) => {
    try{
        const data = await repository.get();
        return res.status(200).send(data);
    }catch (error){
        return res.status(500).send({
            message : "Erro ao buscar os clientes."
        })
    }
    
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract()
    contract.isEmail(req.body.email,'Você deve preencher com um email');

    try{
        if(!contract.isValid()){
            res.status(400).send({message: "Erro ao cadastrar. Valide as informações preenchidas!"});
            return;
        }

    await repository.create(req.body)
    res.status(201).send({mensagem : "Criado com sucesso"});
    }catch(error){
        res.status(400).send({message: "Erro ao cadastrar. Valide as informações preenchidas!"})
    }
}

exports.put = async(req, res) => {    
    try{
        const id = req.params.id;

        await repository.update(id, req.body)
        res.status(204).send({mensagem: "Atualizado com sucesso"});  
    }catch(error){
        res.status(400).send({mensagem: "Erro ao cadastrar. Valide as informações preenchidas!"});
    } 
    
}