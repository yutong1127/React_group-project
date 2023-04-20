import React, { useState } from "react";
import axios from 'axios';
import useGet from "../hooks/useGet";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const AppContext = React.createContext({
    patients: [],
    notifications: [],
    tasks: []
});

export function AppContextProvider({ children }) {

    const {
        data: notification,
        isLoading: notificationsLoading,
        refresh: refreshNotifications
    } = useGet(`${API_BASE_URL}/api/notification`, []);


    const {
        data: tasks,
        isLoading: tasksLoading,
        refresh: refreshTasks
    } = useGet(`${API_BASE_URL}/api/task`, []);


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


    async function deleteNotification(id) {
        const deleteResponse = await axios.delete(`${API_BASE_URL}/api/notification/${id}`);
        console.log(deleteResponse);
        refreshNotifications();
    }


    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    }

    const patients = [{
        name: "Kevin Zheng",
        location: "Ward 9",
        identifier: "ABC123",
    },
    {
        name: "Mickey Mouse",
        location: "Ward 1",
        identifier: "XYZ123"
    },
    {
        name: "Minnie Mouse",
        location: "Ward 3",
        identifier: "DEF456"
    },
    {
        name: "Donald Duck",
        location: "Ward 21",
        identifier: "ZZZ888"
    },
    ];


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
        createTask
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
