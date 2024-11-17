const express = require('express')
const app = express()
const port = 3000
const data = require("./data.json")
const { sendStatus } = require('express/lib/response')

app.get('/api/v1/venues', function (req, res) {
  res.send(data.venues)
})

app.get('/api/v1/venue/:id/seats', function (req, res) {
  const Id = req.params.id
  res.send(data.cinemas[Id])
})

app.get('/api/v1/venue/:id/screenings', function (req, res) {
  const Id = req.params.id
  res.send(data.screenings[Id])
})

app.post('/api/v1/venue/:cinemaId/screening/:screeningId/reserve', function (req, res) {
  //console.log(req)
  res.sendStatus(301)
})

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`)
})
