const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json(error);
    }

    next();
}

const validarRolUsuario = (req, res, next) => {
    const { role } = req.body;
    if (role !== "STUDENT_ROLE" && role !== "TEACHER_ROLE" && role !== null) {
        return res.status(400).json({
            msg: 'El rol del usuario debe ser STUDENT_ROLE o TEACHER_ROLE'
        });
    }
    next();
};


const validarRolTeacher = (req, res, next) => {
    const usuario = req.usuario;

    if (!usuario || usuario.role !== "TEACHER_ROLE") {
        return res.status(403).json({
            msg: 'Eres un estudiante, no puedes realizar esta acción'
        });
    }
    
    next();
};


module.exports = {
    validarCampos,
    validarRolUsuario,
    validarRolTeacher
}