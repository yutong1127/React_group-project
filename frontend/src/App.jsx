import './App.css';
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import LoginPage from "./LoginPage/LoginPage";
import LoginPage from './pages/LoginPage/LoginPage'
import MyProfile from './MyProfilePage/MyProfile';
import MyTeam from './MyTeamPage/MyTeam';
import PatientList from './pages/PatientListPage/PatientInfoTab';
import Notifications from './pages/NotificationsPage/Notification';
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
          <Route path='patientinfo' element={< PatientList />}/>
          <Route path='patientdetails' element={< PatientListGrid />}/>

      </Route>


    </Routes>
  );
}

export default App;
