const { response, json } = require('express');
const Curso = require('../models/curso');

const cursosGet = async (req, res = response ) => {
    const { limite, desde } = req.query;
    const query = { estado: true};

    const [total, cursos] = await Promise.all([
        Curso.countDocuments(query),
        Curso.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        cursos
    });
} 

const getCursoByid = async (req, res) => {
    const { id } = req.params;
    const curso = await Curso.findOne({_id: id});

    res.status(200).json({
        curso
    });
}

const cursosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto} = req.body;

    const curso = await Curso.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Curso actualizado'
    })
}

const cursosDelete = async (req, res) => {
    const {id} = req.params;
    const curso = await Curso.findByIdAndUpdate(id,{estado: false});

    res.status(200).json({
        msg: 'Curso eliminado'
    });
}

const cursosPost = async (req, res) =>{
    const { nombre, categoria } = req.body;
    const curso = new Curso({nombre, categoria});

    await curso.save();
    res.status(200).json({
        curso
    });
}

module.exports = {
    cursosDelete,
    cursosPost,
    cursosGet,
    getCursoByid,
    cursosPut
}