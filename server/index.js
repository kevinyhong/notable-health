const express = require('express');
const data = require('./data');
const db = require('../db/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/physicians/:id', async (req, res) => {
  // console.log('Sending all physician data')
  // res.send(data.physicians[req.params.id])
  try {
    let details = await db.getPhysician(req.params.id);
    res.send(details);
  } catch(err) {
    console.error(err);
    res.sendStatus(404);
  }
});

app.get('/physicians', async (req, res) => {
  // console.log('Sending all physician data')
  // res.send(data.physicians);
  try {
    let list = await db.getPhysicians();
    res.send(list);
  } catch(err) {
    console.error(err);
    res.sendStatus(404);
  }
});

app.get('/physicians/:id/apts', async (req, res) => {
  // console.log(`Sending appointment data physician with ID: ${req.params.id}`)
  // const apts = data.appointments.filter(apt => {
  //   return apt.attending === parseInt(req.params.id)
  // })
  // res.send(apts);
  try {
    let apts = await db.getAppointments(req.params.id);
    res.send(apts);
  } catch(err) {
    console.error(err);
    res.sendStatus(404);
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to the server: ', err);
  } else {
    console.log(`Listening on ${PORT}...`);
  }
});