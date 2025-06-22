import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())


app.get('/', (req, res) => {
    res.send('how are you')
})

app.get('/productos/', (req, res) => {
    const {id} = req.query
    res.send(id)
})

app.listen(PORT, () => console.log('Listening on port ' + PORT))
