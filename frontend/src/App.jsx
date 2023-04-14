import { useState } from 'react';
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';
import './App.css';
import AddPatient from './AddPatient';
import BasicTabs from './PatientInfoTab';
import Notifications from './notifications/Notification'



function App() {

  return (
    <div className="App">
      <BasicTabs />
      {/* <AddPatient /> */}
      {/* <Notifications /> */}
      {/* <MyProfile/> */}
      {/* <MyTeam /> */}
    </div>
  )
}

export default App
