const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser')
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use(
     bodyParser.urlencoded({
          extended: false
     })
)
app.get('/', (request, response) => {
     response.send('Hello World!')
})

global.config = require('./configs/postgresql')
require('./services/experiencesService')(app, global.config.pool)
require('./services/contactsService')(app, global.config.pool)

app.listen(port, () => {
     console.log(`App listen on port ${port}`)
})
