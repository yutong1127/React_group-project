import React, { useState } from "react";
import notificationList from "./notifications/DummyData";

export const AppContext = React.createContext({});

export function AppContextProvider ({children}){
    const [notifications, setNotifications] = useState(notificationList);
    
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
    
    const context = {
        notificationList,
        notifications,
        handleClick,
        drawerOpen,
        handleDrawerOpen,
        handleDrawerClose
        
    }
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}