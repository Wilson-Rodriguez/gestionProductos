import express from 'express'
import productosRoutes from './routes/productos.router.js'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/productos', productosRoutes)


app.listen(PORT, () => console.log('Listening on port ' + PORT))
