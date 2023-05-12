import './App.css';
import React, { Fragment } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import MyProfile from './pages/MyProfilePage/MyProfile';
import MyTeam from './pages/MyTeamPage/MyTeam';
import PatientList from './pages/PatientListPage/PatientInfoTab';
import Notifications from './pages/NotificationsPage/Notification';
import PageWithNavbar from "./pages/PageWithNavBar";
import PatientListGrid from "./pages/PatientDetailsPage/PatientListGrid";
import { PageNotFound } from './ErrorPage.jsx';
import LoggedInRoute from "./LoggedInRoute";

function App() {
  return (
    <Fragment>
      <PageWithNavbar />
      <Routes>
        <Route index path="/" element={<Navigate to="login" replace />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='notification' element={
          <LoggedInRoute>
            <Notifications />
          </LoggedInRoute>
        } />
        <Route path='myteam' element={
          <LoggedInRoute>
            <MyTeam />
          </LoggedInRoute>
        } />
        <Route path='myprofile' element={
          <LoggedInRoute>
            <MyProfile />
          </LoggedInRoute>
        } />
        <Route path='patientlist' element={
          <LoggedInRoute>
            <PatientList />
          </LoggedInRoute>
        } />
        <Route path='patientdetails/:patientId' element={
          <LoggedInRoute>
            <PatientListGrid />
          </LoggedInRoute>
        } />
        //if nothing matches, show error page
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
