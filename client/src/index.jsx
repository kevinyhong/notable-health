import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Physicians from './Physicians.jsx';
import Appointments from './Appointments.jsx';

// React Class Component Implementation
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       view: 0,
//       physicians: [],
//       appointments: []
//     };

//     this.changeView = this.changeView.bind(this);
//   }

  

//   componentDidMount() {
//     Promise.all([this.getPhysicians(), this.getAppointments(this.state.view)])
//       .then(values => {
//         this.setState({
//           physicians: values[0].data,
//           appointments: values[1].data,
//         })
//       })
//   }

//   changeView(index) {
//     this.getAppointments(index).then(res => {
//       this.setState({
//         appointments: res.data,
//         currentView: index
//       })
//     })
//   }

//   getPhysicians() {
//     return axios.get('/physicians')
//   }

//   getAppointments(id) {
//     return axios.get(`/physicians/${id}/apts`)
//   }

//   render() {
//     const { physicians, view, appointments } = this.state;
//     return (
//       <div id='container'>
//         <Physicians physicians={physicians} select={this.changeView} />
//         {physicians.length ? <Appointments doctor={physicians[view]} apts={appointments} /> : null}
//       </div>
//     )
//   }
// }

// React Functional Component Using Hooks
const App = (props) => {
  const [view, setView] = useState(1);

  return (
    <div id='container'>
      <Physicians view={view} select={setView}/>
      <Appointments view={view} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
