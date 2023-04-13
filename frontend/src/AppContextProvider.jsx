import React from "react";

const AppContext = React.createContext({
    patients: []
});

function AppContextProvider({ children }) {

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
        patients
    }


    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}
export {
    AppContext,
    AppContextProvider
};