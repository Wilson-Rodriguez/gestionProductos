import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())


app.get('/', (req, res) => {
    res.send('fine and you')
})

app.post('/', (req, res) => {
    res.send(req.body)
})

app.get('/productos/:id', (req, res) => {
    const id = req.params.id
    res.send(id)
})

app.listen(PORT, () => console.log('Listening on port ' + PORT))
