import React from "react";
import Patient_detail from "./Patient_detail";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';

import AddPatient from './AddPatient';
import BasicTabs from './PatientInfoTab';
import Notifications from './notifications/Notification'



function App() {
  return (
    <div className="App">
      <Patient_detail />
      {/* <BasicTabs /> */}
      {/* <AddPatient /> */}
      {/* <Notifications /> */}
      {/* <MyProfile/> */}
      {/* <MyTeam /> */}
    </div>
  );
}

export default App;
