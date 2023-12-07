import repository from '../repositorio/curso.repository.js'

const findAll = async (req,res) => {
    const result = await repository.findAll()

    return setResult(result, res);
}

const create = async (req,res) => {
    const result = await repository.create(req.body);

    return setResult(result, res);
}

const findOne = async (req, res) => {
    const result = await repository.findOne(req.params.id);

    return setResult(result, res);

}

const update = async (req, res) => {
    const result = await repository.update(req.body);
    return setResult(result, res);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return setResult(result, res);
}

const setResult = (result, res) => {
    if (result) 
        return res.status(200).json(result);
    else
        return res.status(500).json({ mensaje: 'Ha ocurrido un error.'})
}

export default { findAll,create, findOne, update, remove }