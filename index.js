import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars'
import handlebars from 'handlebars'
import { readFileSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', [`${__dirname}/views`])

app.use(express.urlencoded({ extended: false }))

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))

const todoInput = handlebars.compile(readFileSync(`${__dirname}/views/partials/todo-input.handlebars`, "utf-8"))

app.get('/', (req, res) => {
    res.render('index', {
        partials: { todoInput },
    })
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})