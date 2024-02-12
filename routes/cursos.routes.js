const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { existeCursoById} = require('../helpers/db-validators');

const { cursosPost, cursosGet, getCursoByid, cursosPut, cursosDelete } = require('../controllers/cursos.controller');

const router = Router();

router.get("/", cursosGet);

router.get(
    "/:id",
    [
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeCursoById),
        validarCampos
    ], getCursoByid);

router.put(
    "/:id",
    [
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeCursoById),
        validarCampos
    ], cursosPut);

router.delete(
        "/:id",
        [
            check("id","El id no es un formato válido de MongoDB").isMongoId(),
            check("id").custom(existeCursoById),
            validarCampos
        ], cursosDelete);

        
router.post(
    "/", 
    [
        check("nombre","El nombre es obligatorio").not().isEmpty(),
        validarCampos,
    ], cursosPost); 

module.exports = router;