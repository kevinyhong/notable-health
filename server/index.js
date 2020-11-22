const express = require('express');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/../client/dist`))

app.get('/physicians/:id', (req, res) => {
  console.log('Sending all physician data')
  res.send(data.physicians[req.params.id])
})

app.get('/physicians', (req, res) => {
  console.log('Sending all physician data')
  res.send(data.physicians);
})

app.get('/physicians/:id/apts', (req, res) => {
  console.log(`Sending appointment data physician with ID: ${req.params.id}`)
  const apts = data.appointments.filter(apt => {
    return apt.attending === parseInt(req.params.id)
  })
  res.send(apts);
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to the server: ', err)
  } else {
    console.log(`Listening on ${PORT}...`)
  }
})