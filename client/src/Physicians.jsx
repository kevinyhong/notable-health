import React from 'react';

const Physicans = ({ physicians, select }) => (
  <div id="phys-container">
    <h2>Notable</h2>
    <h3>Physicians</h3>
    <ul>
      {physicians.map((phys, index) => (
        <li className="phys" key={index} onClick={() => { select(phys.id) }}>{`${phys.last_name}, ${phys.first_name}`}</li>
      ))}
    </ul>
  </div>
)

export default Physicans;