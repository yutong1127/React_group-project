import React, { useState, useEffect } from "react";
import axios from "axios";
import useGet from "../hooks/useGet";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const AppContext = React.createContext({
  patients: [],
  notifications: [],
  tasks: [],
  tasksCompleted: [],
  patientList: [],
  clinicianList: [],
  team: {},
  userProfile: {},
  unreadNotification: [],
});

export function AppContextProvider({ children }) {
  const {
    data: notification,
    isLoading: notificationsLoading,
    refresh: refreshNotifications,
  } = useGet(`${API_BASE_URL}/api/notification`, []);

  const {
    data: tasks,
    isLoading: tasksLoading,
    refresh: refreshTasks,
  } = useGet(`${API_BASE_URL}/api/task`, []);

  const {
    data: unreadNotification,
    isLoading: unreadNotificationLoading,
    refresh: refreshUnreadNotifications,
  } = useGet(`${API_BASE_URL}/api/notification/unread`, []);


  const {
    data: tasksCompleted,
    isLoading: tasksCompletedLoading,
    refresh: refreshtasksCompleted,
  } = useGet(`${API_BASE_URL}/api/task/completed/644df7643f213262d45ce9f3`, []);

  const {
    data: patientList,
    isLoading: patientListLoading,
    refresh: refreshPatientList,
  } = useGet(`${API_BASE_URL}/api/team/1/patient_list`, []);

  const {
    data: clinicianList,
    isLoading: clinicianListLoading,
    refresh: refreshClinicianList,
  } = useGet(`${API_BASE_URL}/api/team/1/clinician_list`, []);

  const {
    data: team,
    isLoading: teamLoading,
    refresh: refreshTeam,
  } = useGet(`${API_BASE_URL}/api/team/1`, []);

  const {
    data: userProfile,
    isLoading: userProfileLoading,
    refresh: refreshUserProfile,
  } = useGet(`${API_BASE_URL}/api/user_profile/644df7643f213262d45ce9f3`, []);

  async function deleteNotification(id){
    const deleteResponse = await axios.delete(`${API_BASE_URL}/api/notification/${id}`);

    console.log(deleteResponse);

    refreshNotifications();
    refreshUnreadNotifications();

}

  async function readNotification(id) {
    console.log(id);
    const updateResponse = await axios.put(
      `${API_BASE_URL}/api/notification/unread/${id}`
    );

    console.log(updateResponse);

    refreshUnreadNotifications();
    refreshNotifications();
  }

  async function updateUserProfile(id, data) {
    const updateResponse = await axios.put(
      `${API_BASE_URL}/api/user_profile/${id}`,
      data
    );

    console.log(updateResponse && "you have updated profile for" + data.fname);

    refreshUserProfile();
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const patients = [
    {
      name: "Kevin Zheng",
      location: "Ward 9",
      identifier: "ABC123",
    },
    {
      name: "Mickey Mouse",
      location: "Ward 1",
      identifier: "XYZ123",
    },
    {
      name: "Minnie Mouse",
      location: "Ward 3",
      identifier: "DEF456",
    },
    {
      name: "Donald Duck",
      location: "Ward 21",
      identifier: "ZZZ888",
    },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  async function checkLoginStatus() {
    // console.log("Checking login status...");
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user/status`, {
        withCredentials: true,
      });
      setLoggedIn(response.data.loggedIn);
      //   console.log("Login status:", response.data.loggedIn);
    } catch (error) {
      console.error("Error checking login status:", error);
    }

    useEffect(() => {
      checkLoginStatus();
    }, []);
  }

  const context = {
    notification,
    notificationsLoading,
    unreadNotification,
    unreadNotificationLoading,
    deleteNotification,
    readNotification,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
    patients,
    tasks,
    tasksLoading,
    tasksCompleted,
    patientList,
    patientListLoading,
    clinicianList,
    clinicianListLoading,
    team,
    teamLoading,
    userProfile,
    userProfileLoading,
    updateUserProfile,
    loggedIn,
    setLoggedIn,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
