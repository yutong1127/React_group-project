import React, { useState } from "react";
import axios from 'axios';
import useGet from "../hooks/useGet";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const AppContext = React.createContext({
    patients: [],
    notifications: [],
    unreadNotification:[],
    tasks: [],
});

export function AppContextProvider ({ children }){

    const {
        data: notification,
        isLoading: notificationsLoading,
        refresh: refreshNotifications
    } =useGet (`${API_BASE_URL}/api/notification`, []);

    const {
        data: unreadNotification,
        isLoading: unreadNotificationLoading,
        refresh: refreshUnreadNotifications
    } =useGet (`${API_BASE_URL}/api/notification/unread`, []);


    const {
        data: tasks,
        isLoading: tasksLoading,
        refresh: refreshTasks
    } = useGet(`${API_BASE_URL}/api/task`, []);

    async function deleteNotification(id){
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
        unreadNotification,
        unreadNotificationLoading,
        deleteNotification,
        drawerOpen,
        handleDrawerOpen,
        handleDrawerClose,
        patients,
        tasks,
        tasksLoading
        
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
