import React, { useState } from "react";
// import notificationList from "./notifications/DummyData";
import axios from 'axios';
import useGet from "./hooks/useGet";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const AppContext = React.createContext({
    patients: [],
    notifications: []
});

export function AppContextProvider ({ children }){

    const {
        data: notification,
        isLoading: notificationsLoading,
        refresh: refreshNotifications
    } =useGet (`${API_BASE_URL}/api/notification`, []);

    // const [notifications, setNotifications] = useState(notificationList);
    const [notifications, setNotifications] = useState(notification);

    console.log(notifications);

    async function deleteNotification(id){
        const deleteResponse = await axios.delete(`${API_BASE_URL}/api/notification/${id}`);

        console.log(deleteResponse);

        refreshNotifications();

    }

    const handleClick = index =>{

        const newList = [...notifications];
        newList.splice(index,1);
        setNotifications(newList);
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
        notifications,
        notificationsLoading,
        deleteNotification,
        handleClick,
        drawerOpen,
        handleDrawerOpen,
        handleDrawerClose,
        patients
        
    }
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
