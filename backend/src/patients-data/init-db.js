import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { patient } from '../dummy-data';
import { Patient } from './schema';

mongoose.set('strictQuery', false);

async function run() {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }); 
    
    console.log('Clearing db...');
    // Clear the database by deleting all Pokedex entries
    await clearDatabase();


    console.log('Adding data...');
    // Add patients
    await addPatient();

    await mongoose.disconnect();
    console.log('Done!');
}

run();

async function clearDatabase() {
    const patientsDeleted = await Patient.deleteMany({});
    console.log(`Cleared database (removed ${patientsDeleted.deletedCount} patients).`)
     
}

async function addPatient() {
    for(const data of patient) {
        const dbMon = new Patient(data);

        await dbMon.save();
        console.log(`Patient saved! _id = ${dbMon._id}, name = ${dbMon.name}`);
    }
}