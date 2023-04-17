import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { patient, user, team } from '../dummy-data';
import { Patient, User, Team } from './schema';

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
    await addUser();
    await addTeam();

    await mongoose.disconnect();
    console.log('Done!');
}

run();

async function clearDatabase() {
    const patientsDeleted = await Patient.deleteMany({});
    console.log(`Cleared database (removed ${patientsDeleted.deletedCount} patients).`)
    const usersDelete = await User.deleteMany({});
    console.log(`Cleared database (removed ${usersDelete.deletedCount} users).`)
    const teamsDelete = await User.deleteMany({});
    console.log(`Cleared database (removed ${teamsDelete.deletedCount} teams).`)
     
}

async function addPatient() {
    for(const data of patient) {
        const dbMon = new Patient(data);

        await dbMon.save();
        console.log(`Patient saved! _id = ${dbMon._id}`);
    }
}

async function addUser() {
    for(const data of user) {
        const dbMon = new User(data);
        await dbMon.save();
        console.log(`User saved! _id = ${dbMon._id}`);
    }
}

async function addTeam() {
    for(const data of team) {
        const dbMon = new Team(data);
        await dbMon.save();
        console.log(`Team saved! _id = ${dbMon._id}`);
    }
}