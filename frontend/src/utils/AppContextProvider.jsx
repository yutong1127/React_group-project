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

    const {
        data: teamPatients,
        isLoading: teamPatientsLoading,
        refresh: refreshTeamPatients
    } = useGet(`${API_BASE_URL}/api/patients`, []);

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
    }


    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    }

    async function createContainer(id, container_id) {
        const res = await axios.put(`${API_BASE_URL}/api/patients/${id}`, { container: container_id });
        console.log(res);
    }

    const context = {
        notification,
        notificationsLoading,
        deleteNotification,
        drawerOpen,
        handleDrawerOpen,
        handleDrawerClose,
        teamPatients,
        tasks,
        tasksLoading,
        createTask,
        deleteTask,
        claimTask,
        createContainer
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
