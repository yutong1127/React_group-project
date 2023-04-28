import PatientCard from './PatientCard'
import { AppContext } from '../../../utils/AppContextProvider'
import { useContext,useState, React, useEffect } from 'react'
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export default function Overview() {

    //const { patients } = useContext(AppContext)

    //Jant: Retrieve all patients or by team?
    const [patients, setPatients] = useState([]);
    // temporary for testing
    useEffect(() => {
        async function getPatients() {
            const p = [];
            const {data}  = await axios.get(`${API_BASE_URL}/api/team/1/patient_list`);
            for (const d of data) {
                const patient = {
                    name: `${d.fname} ${d.lname}`,
                    location: d.location,
                    identifier: d._id
                }
                p.push(patient)
            }
            setPatients(p);
        }
        getPatients();
        console.log(patients);
    }, []);

    return (
        <div>
            {patients.map(patient => <PatientCard key={patient.identifier} patient={patient}/>)}
        </div>
    )
};