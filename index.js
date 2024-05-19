import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars'
import handlebars from 'handlebars'

const PORT = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', [`${dirname(fileURLToPath(import.meta.url))}/views`])

app.use(express.urlencoded({ extended: false }))

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})