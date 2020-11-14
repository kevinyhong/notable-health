import React from 'react';

const Appointments = ({ doctor, apts }) => (
  <div id='apts-container'>
    <h1>{`Dr. ${doctor.first_name} ${doctor.last_name}`}</h1>
    <h3>{doctor.email}</h3>
    <table id='apt-table'>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Time</th>
        <th>Kind</th>
      </tr>
      {apts.map((apt, index) => (
        <tr>
          <th>{index + 1}</th>
          <th>{apt.patient_name}</th>
          <th>{apt.time}</th>
          <th>{apt.kind ? 'Follow-Up' : 'New Patient'}</th>
        </tr>
      ))}
    </table>
  </div>
)

export default Appointments;