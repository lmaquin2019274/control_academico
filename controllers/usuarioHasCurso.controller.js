const { response, json } = require('express');
const usuarioHasCurso = require('../models/usuarioHasCurso');

const usuarioHasCursoGet = async (req, res = response ) => {
    const { limite, desde } = req.query;
    const query = { estado: true};

    const [total, usuarioHasCursos] = await Promise.all([
        usuarioHasCurso.countDocuments(query),
        usuarioHasCurso.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        usuarioHasCursos
    });
} 

const getUsuarioHasCursoByid = async (req, res) => {
    const { id } = req.params;
    const usuarioHasCursos = await usuarioHasCurso.findOne({_id: id});

    res.status(200).json({
        cursos
    });
}

const usuarioHasCursoPut = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto} = req.body;

    const usuarioHasCursos = await usuarioHasCurso.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'usuario has curso actualizado'
    })
}

const usuarioHasCursoDelete = async (req, res) => {
    const {id} = req.params;
    const usuarioHasCursos = await usuarioHasCurso.findByIdAndUpdate(id,{estado: false});

    res.status(200).json({
        msg: 'usuario has curso eliminado'
    });
}

const usuarioHasCursoPost = async (req, res) =>{
    const { nombre, categoria } = req.body;
    const usuarioHasCursos = new usuarioHasCurso({usuario, curso});

    await curso.save();
    res.status(200).json({
        usuarioHasCursos
    });
}

module.exports = {
    usuarioHasCursoDelete,
    usuarioHasCursoPost,
    usuarioHasCursoGet,
    getUsuarioHasCursoByid,
    usuarioHasCursoPut
}