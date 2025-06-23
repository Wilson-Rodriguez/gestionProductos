import productos from '../local_db/productos.json' with {type: 'json'}
import fs from 'fs'

export const getAll = (req, res) => {
    res.json(productos)
}

export const productoPorID = (req, res) => {
    const id = req.params.id
    res.json(productos.find((producto) => {return producto.id === Number(id)}))
}

export const agregarProducto = (req, res) => {
    productos.push(req.body)
    fs.writeFileSync('../local_db/productos.json', JSON.stringify(productos, null, 2))

}