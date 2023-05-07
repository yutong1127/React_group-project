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
  allTeams: [],
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
      console.log(`saved user:${savedUser}`)
    }
  }, []);

  // add check login status
  const options = loggedIn ? { withCredentials: true } : {};

  const {
    data: notification,
    isLoading: notificationsLoading,
    refresh: refreshNotifications,
  } = useGetUser(clinicianId ? `${API_BASE_URL}/api/notification/${clinicianId}` : null,
    [],
    [loggedIn],
    options);

  const {
    data: tasks,
    isLoading: tasksLoading,
    refresh: refreshTasks,
  } = useGetUser(clinicianId ? `${API_BASE_URL}/api/task` : null,
    [],
    [loggedInUser],
    options);

  const {
    data: unreadNotification,
    isLoading: unreadNotificationLoading,
    refresh: refreshUnreadNotifications,
  } = useGetUser(clinicianId ? `${API_BASE_URL}/api/notification/unread/${clinicianId}` : null,
    [],
    [loggedIn],
    options);

  const {
    data: teamPatients,
    isLoading: teamPatientsLoading,
    refresh: refreshTeamPatients
  } = useGetUser(clinicianId && `${API_BASE_URL}/api/patient`,
    [],
    [loggedIn],
    options);

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
    refreshTasks(),
    readNotification(),
    refreshUnreadNotifications()
  }

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
    // console.log(id);
    const updateResponse = await axios.put(
      `${API_BASE_URL}/api/notification/unread/${id}`
    );

    console.log(updateResponse);

    refreshUnreadNotifications();
    refreshNotifications();
  }

  async function deleteTask(tasksSelected) {
    for (let i = 0; i < tasksSelected.length; i++) {
      await axios.delete(`${API_BASE_URL}/api/task/${tasksSelected[i]}`);
    }
  }

  async function claimTask(tasksSelected) {
    for (let i = 0; i < tasksSelected.length; i++) {
      //Need user dao to retrieve the user object ID to updated the displayedtask object to send to server
      await axios.put(`${API_BASE_URL}/api/task/updatetask/${tasksSelected[i]}`, { clinician: clinicianId });
    }
  }

  async function completeTask(tasksSelected) {
    for (let i = 0; i < tasksSelected.length; i++) {
      await axios.put(`${API_BASE_URL}/api/task/updatetask/${tasksSelected[i]}`, {
        status: 2,
        finished_at: Date.now()
      });
    }
  }


  async function deleteNotification(id) {
    const deleteResponse = await axios.delete(clinicianId ? `${API_BASE_URL}/api/notification/${id}` : null);

    console.log(deleteResponse);

    refreshNotifications();
    refreshUnreadNotifications();

  }

  const {
    data: patientList,
    isLoading: patientListLoading,
    refresh: refreshPatientList,
  } = useGetUser(loggedInUser && `${API_BASE_URL}/api/team/${loggedInUser.team}/patient_list`, []);

  // const {
  //   data: clinicianList,
  //   isLoading: clinicianListLoading,
  //   refresh: refreshClinicianList,
  // } = useGet(`${API_BASE_URL}/api/team/1/clinician_list`, []);

  const {
    data: team,
    isLoading: teamLoading,
    refresh: refreshTeam,
  } = useGetUser(loggedInUser && `${API_BASE_URL}/api/team/${loggedInUser.team}`,
    [],
    [loggedIn],
    options);

  const {
    data: allTeams,
    isLoading: allTeamsLoading,
    refresh: refreshAllTeams,
  } = useGetUser(loggedInUser && `${API_BASE_URL}/api/team`,
    [],
    [loggedIn],
    options);


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

  async function addPatientProvider(data) {
    const postResponse = await axios.post(`${API_BASE_URL}/api/patient/add`, data);
    console.log(postResponse);

    refreshNotifications();
    refreshUnreadNotifications();

    location.reload();
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
    // clinicianList,
    // clinicianListLoading,
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
    addPatientProvider,
    completeTask,
    allTeams,
    allTeamsLoading,
    options,
    refreshNotifications,
    refreshUnreadNotifications
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
