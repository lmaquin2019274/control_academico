const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { existeCursoById} = require('../helpers/db-validators');

const { usuarioHasCursoPost, usuarioHasCursoGet, getUsuarioHasCursoByid, usuarioHasCursoPut, usuarioHasCursoDelete } = require('../controllers/usuarioHasCurso.controller');

const router = Router();

router.get("/", usuarioHasCursoGet);

router.get(
    "/:id",
    [
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeCursoById),
        validarCampos
    ], getUsuarioHasCursoByid);

router.put(
    "/:id",
    [
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeCursoById),
        validarCampos
    ], usuarioHasCursoPut);

router.delete(
        "/:id",
        [
            check("id","El id no es un formato válido de MongoDB").isMongoId(),
            check("id").custom(existeCursoById),
            validarCampos
        ], usuarioHasCursoDelete);

        
router.post(
    "/", 
    [
        check("estudiante","El estudiante es obligatorio").not().isEmpty(),
        check("curso","El curso es obligatorio").not().isEmpty(),
        validarCampos,
    ], usuarioHasCursoPost); 

module.exports = router;