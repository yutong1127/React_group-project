import React, { useState } from "react";
import notificationList from "./notifications/DummyData";

export const AppContext = React.createContext({
    patients: []
});

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
        notificationList,
        notifications,
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
