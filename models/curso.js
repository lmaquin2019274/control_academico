const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
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
    }
});

module.exports = model('Usuario', UsuarioSchema);