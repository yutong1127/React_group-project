import PatientCard from './PatientCard'
import { AppContext } from '../../../utils/AppContextProvider'
import { useContext } from 'react'

export default function Overview() {

    const { teamPatients } = useContext(AppContext)

    return (
        <div>
            {teamPatients.map(patient => <PatientCard key={patient._id} patient={patient} />)}
        </div>
    )
};