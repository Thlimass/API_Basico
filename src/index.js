const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)

app.listen(5000, () => console.log('Sever on port 5000'))