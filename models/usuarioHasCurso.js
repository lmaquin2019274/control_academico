const { Schema, model, Types } = require('mongoose');

const UsuarioHasCursoSchema = Schema ({
    usuario: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Usuario obligatorio']
    },
    curso: {
        type: Types.ObjectId,
        ref: 'Curso',
        required: [true, 'Curso obligatorio']
    },
    fecha_inscripcion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = model('UsuarioHasCurso', UsuarioHasCursoSchema);