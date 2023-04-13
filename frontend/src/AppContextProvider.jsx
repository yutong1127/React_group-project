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
    
    const context = {
        notificationList,
        notifications,
        handleClick
        
    }
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}