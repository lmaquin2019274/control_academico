const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'Correo obligatorio']
    },
    password: {
        type: String,
        required: [true, 'Password obligatorio']
    },
    role:{
        type: String,
        required: true,
        enum: ["STUDENT_ROLE", "TEACHER_ROLE"],
        default: "STUDENT_ROLE"
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Usuario', UsuarioSchema);