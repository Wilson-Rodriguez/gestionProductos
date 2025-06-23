import {Router} from 'express'
import {getAll} from '../controllers/productos.controller.js'

const productosRouter = Router()

productosRouter.get('/', (req, res) => {
    getAll(req, res)
})

export default productosRouter