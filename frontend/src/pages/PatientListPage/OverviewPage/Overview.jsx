import PatientCard from './PatientCard'
import { AppContext } from '../../../AppContextProvider'
import { useContext } from 'react'

export default function Overview() {

    const { patients } = useContext(AppContext)

    return (
        <div>
            {patients.map(patient => <PatientCard key={patient.identifier} patient={patient}/>)}
        </div>
    )
};