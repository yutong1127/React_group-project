import { useState } from 'react';
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';
import './App.css';
import Notifications from './notifications/Notification'



function App() {

  return (
    <div className="App">
      <Notifications />
      {/* <MyProfile/> */}
      {/* <MyTeam /> */}
    </div>
  )
}

export default App
