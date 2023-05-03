import React, { useState, useEffect } from "react";
import axios from "axios";
import useGet from "../hooks/useGet";
import useGetUser from "../hooks/useGetUser";

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

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [clinicianId, setClinicianId] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      console.log("loggedInUser:", loggedInUser);
      setClinicianId(loggedInUser._id);
    }
  }, [loggedInUser]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('loggedInUser');

    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
      setLoggedIn(true);
    }
  }, []);


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
    data: teamPatients,
    isLoading: teamPatientsLoading,
    refresh: refreshTeamPatients
  } = useGet(`${API_BASE_URL}/api/patient`, []);

  async function createTask(task) {
    await axios.post(`${API_BASE_URL}/api/task/createtask`, {
      name: task.name,
      type: task.type,
      patient: task.patient,
      clinician: task.clinician,
      priority: task.priority,
      status: task.status
    })
      .then(function (response) {
        console.log(response);
      })
    refreshTasks()
  }

  async function deleteTask(tasksSelected) {
    for (let i = 0; i < tasksSelected.length; i++) {
      const taskDeleteResponse = await axios.delete(`http://localhost:3000/api/task/${tasksSelected[i]}`);
      console.log(taskDeleteResponse)

    }
    refreshTasks()
  }

  // add check login status
  const options = loggedIn ? { withCredentials: true } : {};

  const {
    data: userProfile,
    isLoading: userProfileLoading,
    refresh: refreshUserProfile,
  } = useGetUser(clinicianId ? `${API_BASE_URL}/api/user_profile/${clinicianId}` : null,
    [],
    [loggedIn],
    options);

  const {
    data: tasksCompleted,
    isLoading: tasksCompletedLoading,
    refresh: refreshtasksCompleted,
  } = useGetUser(clinicianId ? `${API_BASE_URL}/api/task/completed/${clinicianId}` : null,
    [],
    [loggedIn],
    options);

  async function updateUserProfile(id, data) {
    const updateResponse = await axios.put(
      `${API_BASE_URL}/api/user_profile/${id}`,
      data
    );

    console.log(updateResponse && "you have updated profile for" + data.fname);

    refreshUserProfile();
  }

  async function deleteNotification(id) {
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

  async function claimTask(tasksSelected) {
    for (let i = 0; i < tasksSelected.length; i++) {
      const response = await fetch(`http://localhost:3000/api/task/${tasksSelected[i]}`)
      let taskToBeUpdated = await response.json()

      taskToBeUpdated = {
        ...taskToBeUpdated,
        clinician: '6441045875c54d273abff40f'
      }

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskToBeUpdated)
      };

      //Need user dao to retrieve the user object ID to updated the displayedtask object to send to server
      await fetch(`http://localhost:3000/api/task/assignclinician/${taskToBeUpdated._id}`, requestOptions);
    }
    refreshTasks()
  }


  async function deleteNotification(id) {
    const deleteResponse = await axios.delete(`${API_BASE_URL}/api/notification/${id}`);

    console.log(deleteResponse);

    refreshNotifications();
    refreshUnreadNotifications();

  }

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


  async function createContainer(id, container_id) {
    await axios.put(`${API_BASE_URL}/api/patient/${id}`, { container: container_id });
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
    teamPatients,
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
    createContainer,
    createTask,
    deleteTask,
    claimTask,
    loggedInUser,
    setLoggedInUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
