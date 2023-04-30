import React, { useState, useEffect } from "react";
import axios from "axios";
import useGet from "../hooks/useGet";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const AppContext = React.createContext({
  patients: [],
  notifications: [],
  tasks: [],
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

  async function deleteNotification(id) {
    const deleteResponse = await axios.delete(
      `${API_BASE_URL}/api/notification/${id}`
    );

    console.log(deleteResponse);

    refreshNotifications();
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
  }
  
  useEffect(() => {
    checkLoginStatus();
  }, []);
  

  const context = {
    notification,
    notificationsLoading,
    deleteNotification,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
    patients,
    tasks,
    tasksLoading,
    loggedIn,
    setLoggedIn,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
