import './App.css';
import Overview from './OverviewPage/Overview';
import Tasks from './TasksPage/Tasks';
import { AppContext } from './AppContextProvider';
import { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import React from "react";
import Patient_detail from "./Patient_detail";
import { Routes, Route, Navigate } from "react-router-dom";
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';

import AddPatient from './AddPatient';
import BasicTabs from './PatientInfoTab';
import Notifications from './notifications/Notification'



function App() {
  return (
    <div className="App">
      <Overview />
      {/*<Tasks />*/}
      {/*<LoginPage />*/}
      {/* <Patient_detail /> */}
      {/* <BasicTabs /> */}
      {/* <AddPatient /> */}
      {/* <Notifications /> */}
      {/* <MyProfile/> */}
      {/* <MyTeam /> */}
    </div>
  );
}

export default App;
