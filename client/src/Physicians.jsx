import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Physicans = ({ select }) => {

  const [docs, setDocs] = useState([]);
  
  const fetchDocs = async () => {
    const res = await axios.get('/physicians');
    setDocs(res.data);
  }

  useEffect(() => {
    fetchDocs();
  }, [])

  return (
    <div id="phys-container">
      <h2>Notable</h2>
      <h3>Physicians</h3>
      <ul>
        {docs.map((phys, index) => (
          <li className="phys" key={index} onClick={() => { select(phys.id) }}>{`${phys.last_name}, ${phys.first_name}`}</li>
        ))}
      </ul>
    </div>
  )
}


export default Physicans;