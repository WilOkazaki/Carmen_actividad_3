const { Router } = require('express');
const router = Router();
const Almacen = require('../controllers/almacen');
const validateUser = require('../middlewares/validateUser');


const stock = new Almacen;

router.get('/:tabla', validateUser, async(req, res, ) => {

    const { tabla } = req.params;
    const almacen = await stock.getMostrar(tabla);
    res.json(almacen);
});

router.get('/:tabla/:id', validateUser, async(req, res) => {
    const { tabla, id } = req.params;
    const almacen = await stock.getBuscar(tabla, id);
    res.json(almacen);
});

router.post('/:tabla', validateUser, async(req, res) => {
    const { tabla } = req.params;
    const newEquipo = { Marca, Especificaciones } = req.body
    await stock.postIngresar(tabla, newEquipo);
    const almacen = await stock.getMostrar(tabla);
    res.status(201).json(almacen);
});

router.put('/:tabla/:id', validateUser, async(req, res) => {
    const { tabla, id } = req.params;
    await stock.putActualizar(tabla, req.body, req.params.id)
    const almacen = await stock.getBuscar(tabla, id);
    res.status(201).json(almacen);
});

router.delete('/:tabla/:id', validateUser, async(req, res) => {
    const { tabla, id } = req.params;
    await stock.deleteEliminar(tabla, id);
    const almacen = await stock.getMostrar(tabla);
    res.json(almacen);
});

module.exports = router;