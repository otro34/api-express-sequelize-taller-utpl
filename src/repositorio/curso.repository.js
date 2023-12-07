import curso from '../modelo/curso.model.js'

const findAll = async () => {
    try {
        const result = await curso.findAll();
        return result;

    } catch (error) {
        console.error(error);
        return null;
    }
    
}

const create = async (objeto) => {
    try {
        return await curso.create(objeto);
    } catch (error) {
        console.error(error);
        return null;
    }
    
}

const findOne = async (id) => {
    try {
        return await curso.findOne({
            where: { id }
        })
    } catch (err) {
        console.error(err);
        return null;
    }
}

const update = async (payload) => {

    try {
        const result = await curso.update({
            where: { id: payload.id } 
        })

        if (result) {
            result.set(payload);
            result.save();
        }

        return result;

    } catch (err) {
        console.error(err);
        return null;
    }
}

const remove = async (id) => {
    try {
        await curso.destroy({ 
            where: { id }
        });

        return true;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default { findAll, create, findOne, update, remove } 