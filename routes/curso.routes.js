const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { existeCursoById} = require('../helpers/db-validators');

const { cursosPost, cursosGet, getCursoByid, cursosPut, cursosDelete } = require('../controllers/curso.controller');

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
        check("password","El password debe tener más de 6 letras").isLength({min: 6,}),
        check("correo","El correo debe ser un correo").isEmail(),
        check("correo").custom(existenteEmail),
        validarCampos,
    ], cursosPost); 

module.exports = router;