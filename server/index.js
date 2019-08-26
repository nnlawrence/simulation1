require('dotenv').config()

const express = require('express')

const massive = require('massive')

const {
    CONNECTION_STRING
} = process.env

const app = express()

const ctrl = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('database connected')
})

app.get('/api/inventory', ctrl.getInventory)
app.post(`/api/product`, ctrl.createInventory)
//app.put
//app.delete

app.listen(4000, () => {
    console.log('server running')
})