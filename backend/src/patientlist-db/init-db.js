import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


import { Patient, User, Team, Notification } from './schema';
import { patient, user, team } from '../data/dummy-data';
import { notification } from '../data/notification-data';

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
    await addNotification();

    await mongoose.disconnect();
    console.log('Done!');
}

run();

async function clearDatabase() {
    const patientsDeleted = await Patient.deleteMany({});
    console.log(`Cleared database (removed ${patientsDeleted.deletedCount} patients).`)
    const usersDelete = await User.deleteMany({});
    console.log(`Cleared database (removed ${usersDelete.deletedCount} users).`)
    const teamsDelete = await Team.deleteMany({});
    console.log(`Cleared database (removed ${teamsDelete.deletedCount} teams).`)
    const notificationDelete = await Notification.deleteMany({});
    console.log(`Cleared database (removed ${notificationDelete.deletedCount} notifications).`)
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

async function addNotification(){
    // This should be modified later
    const userJant = await User.findOne( {fname:'Jant'} );
    const userJiewen = await User.findOne( {fname:'Jiewen'} );
    const userKevin = await User.findOne( {fname:'Kevin'} );


    const allPatients = await Patient.find();

    for (const data of notification) {
        // Notification related to transfer/add/remove patients
        if (data.type=='Admin'){
            const patientIndex = Math.floor(Math.random() * allPatients.length)
            const patient = allPatients[patientIndex];
            const dbPatient = await Patient.findOne({_id:patient._id})

            console.log(`DB patient: ${dbPatient}`);

            const dbNotification = new Notification(data);

            dbNotification.recipient = userJant._id;
            dbNotification.sender = userJiewen._id;
            dbNotification.patient = patient._id;

            await dbNotification.save();
            console.log(`Notification for ${userJant.fname} saved! _id=${dbNotification._id}, recipient=${dbNotification.recipient.fname}`);

            // Notification push
            userJant.notification.push(dbNotification._id);
            dbPatient.notification.push(dbNotification._id)
            await userJant.save();
            await dbPatient.save();

        } else if (data.type=='Task'){

            // Notification related to tasks
            const patientIndex = Math.floor(Math.random() * allPatients.length)

            const patient = allPatients[patientIndex];
            const dbPatient = await Patient.findOne({_id:patient._id})

            const dbNotification = new Notification(data);

            dbNotification.recipient = userJant._id;
            dbNotification.sender = userKevin._id;
            dbNotification.patient = patient._id;

            await dbNotification.save();
            console.log(`Notification for ${userJant.fname} saved! _id=${dbNotification._id}, recipient=${dbNotification.recipient.fname}`);

            // Notification push
            userJant.notification.push(dbNotification._id);
            dbPatient.notification.push(dbNotification._id)
            await userJant.save();
            await dbPatient.save();


        }
    }
}