const mysql = require('mysql-await');
const config = require('./config.js'); // used for db connection

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL: ', err)
  } else {
    console.log(`Connected to MySQL`)
  }
});

const getPhysician = async (id) => {
  return await connection.awaitQuery(`SELECT first_name, last_name, email FROM physicians where physicians.id = ${id}`)
}

const getPhysicians = async () => {
  return await connection.awaitQuery(`SELECT id, first_name, last_name FROM physicians`);
}

const getAppointments = async (id) => {
  return await connection.awaitQuery(`SELECT patients.first_name, patients.last_name, appointments.apt_time, appointments.kind FROM appointments LEFT JOIN patients ON appointments.patient_id = patients.id WHERE appointments.attending_id = ${id}`)
}

module.exports = { 
  getPhysician,
  getPhysicians,
  getAppointments
};