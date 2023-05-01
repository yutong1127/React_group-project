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
    } = useGet(`${API_BASE_URL}/api/task/completed/644f4559ac0b8e7ad2933bab`, []);

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

    const {
        data: userProfile,
        isLoading: userProfileLoading,
        refresh: refreshUserProfile,
    } = useGet(`${API_BASE_URL}/api/user_profile/644f4559ac0b8e7ad2933bab`, []);


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
        claimTask
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
