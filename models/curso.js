const { Schema, model} = require('mongoose');

const CursoSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    categoria: {
        type: String,
        required: true,
        enum: ["ciencias", "humanidades", "tecnologia", "calculo", "indefinido"],
        default: "indefinido"
    },
    estado:{
        type: Boolean,
        default: true
    },
    correo_maestro:{
        type: String,
        required: [true, 'Correo obligatorio']
    }
});

module.exports = model('Curso', CursoSchema);