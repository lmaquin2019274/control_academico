const Usuario = require('../models/usuario');
const Perros = require('../models/curso')

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El email ${ correo } ya fue registrado`);
    }
}

const existeUsuarioById = async ( id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El usuario con el id: ${ id } no existe`);
    }
}

const existeCursoById = async ( id = '') => {
    const existeCurso = await Curso.findOne({id});
    if(existeCurso){
        throw new Error(`El curso con el id: ${ id } no existe`);
    }
}

module.exports = {
    existenteEmail,
    existeUsuarioById,
    existeCursoById
}