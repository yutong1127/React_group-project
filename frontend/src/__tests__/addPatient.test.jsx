import { it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AppContext } from '../utils/AppContextProvider'
import AddPatient from '../pages/PatientListPage/AddPatient';
import mongoose from 'mongoose';

const loggedInUser= {
    _id: new mongoose.Types.ObjectId('000000000000000000000011'),
    team: new mongoose.Types.ObjectId('000000000000000000000031'),
};

it('Responds to button click correctly', () => {
    const {queryByRole } = render (
        <AppContext.Provider value={{loggedInUser}}>
                <AddPatient />
            </AppContext.Provider>
    )

    const button = queryByRole('Add');
    expect(button).toBeDefined();
})

