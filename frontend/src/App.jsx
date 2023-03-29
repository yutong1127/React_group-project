import { useState } from 'react';
import './App.css';
import AddPatient from './AddPatient';
import BasicTabs from './PatientInfoTab';


function App() {

  return (
    <div className="App">
      {/* <p>testing</p> */}
      <BasicTabs />
      {/* <AddPatient /> */}
    </div>
  )
}

export default App
