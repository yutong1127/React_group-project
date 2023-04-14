import './App.css';
import Overview from './OverviewPage/Overview';
import Tasks from './TasksPage/Tasks';
import { AppContext } from './AppContextProvider';
import { useState } from "react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
// import Patient_detail from "./PatientDetails/Patient_detail";
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';
import BasicTabs from './AddModifyPatient/PatientInfoTab';
import Notifications from './notifications/Notification';
import PageWithNavbar from "./PageWithNavBar";
import PatientListGrid from "./PatientDetails/PatientListGrid";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<PageWithNavbar />}>
          <Route index element={<Navigate to="login" replace />} />

          <Route path='login' element={< LoginPage />}/>
          <Route path='notification' element={< Notifications />}/>
          <Route path='myteam' element={< MyTeam />}/>
          <Route path='myprofile' element={< MyProfile />}/>
          <Route path='patientinfo' element={< BasicTabs />}/>
          <Route path='patientdetails' element={< PatientListGrid />}/>

      </Route>


    </Routes>
  );
}

export default App;
