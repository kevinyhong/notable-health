import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = ({ view }) => {

  const [apts, setApts] = useState([]);
  const [doc, setDoc] = useState({});

  const fetchApts = async () => {
    const aptRes = await axios.get(`/physicians/${view}/apts`);
    setApts(aptRes.data);
  }

  const fetchDoc = async () => {
    const docRes = await axios.get(`physicians/${view}`);
    setDoc(docRes.data);
  }

  useEffect(() => {
    fetchApts();
    fetchDoc();
  }, [view])

  return (
    <div id='apts-container'>
      <h1>{`Dr. ${doc.first_name} ${doc.last_name}`}</h1>
      <h3>{doc.email}</h3>
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
}


export default Appointments;