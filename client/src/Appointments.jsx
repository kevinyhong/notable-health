import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = ({ view }) => {

  const [apts, setApts] = useState([]);
  const [phys, setPhys] = useState({});

  const fetchApts = async () => {
    const aptRes = await axios.get(`/physicians/${view}/apts`);
    
    aptRes.data.forEach(apt => {
      let apt_time = new Date(apt.apt_time);
      let hour = apt_time.getHours();
      let minutes = apt_time.getMinutes();
      apt.apt_time = `${hour <= 12 ? hour : hour - 12}:${minutes < 10 ? '0' + minutes : minutes} ${hour < 12 ? 'AM' : 'PM'}`;
    })

    setApts(aptRes.data);
  }

  const fetchDoc = async () => {
    const physRes = await axios.get(`physicians/${view}`);
    setPhys(physRes.data[0]);
  }

  useEffect(() => {
    fetchApts();
    fetchDoc();
  }, [view])

  return (
    <div id='apts-container'>
      <h1>{`Dr. ${phys.first_name} ${phys.last_name}`}</h1>
      <h3>{phys.email}</h3>
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
            <th>{`${apt.first_name} ${apt.last_name}`}</th>
            <th>{apt.apt_time}</th>
            <th>{apt.kind ? 'Follow-Up' : 'New Patient'}</th>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Appointments;
