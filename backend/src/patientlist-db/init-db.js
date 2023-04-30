import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


import { Patient, User, Team, Notification, Task } from './schema';
import { patient, user, team } from '../data/dummy-data';
import { notification } from '../data/notification-data';
import { task } from '../data/task-data';
import bcrypt from 'bcrypt';

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
    await addResponsibleClinicians();
    await addTasks();

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
    const taskDelete = await Task.deleteMany({});
    console.log(`Cleared database (removed ${taskDelete.deletedCount} tasks).`)
    const notificationDelete = await Notification.deleteMany({});
    console.log(`Cleared database (removed ${notificationDelete.deletedCount} notifications).`)
}

async function addPatient() {
    for (const data of patient) {
        const dbMon = new Patient(data);

        await dbMon.save();
        console.log(`Patient saved! _id = ${dbMon._id}`);
    }
}

async function addUser() {
    for (const data of user) {
        let password = await bcrypt.hash(data.password, 10);
    
        const dbMon = new User(data);
    
        dbMon.password = password;
    
        await dbMon.save();
        console.log(`User saved! _id = ${dbMon._id}`);
      }
}

async function addTeam() {
    const clinicians = await User.find();
    const patients = await Patient.find();

    let index = 0;
    let teamSize = clinicians.length / team.length;
    console.log(`team size: ${teamSize}`);
    let initialValue = 0;

    for (const data of team) {
        const supervisor = await User.find({ isSupervisor: true });
        const dbSupervisor = await User.findOne(supervisor[index]._id);
        index++;

        console.log(`supervisor is ${dbSupervisor}`);

        const dbTeam = new Team(data);

        dbTeam.supervisors = dbSupervisor._id;

        const dbClinicians = clinicians.slice(initialValue, initialValue + teamSize);
        const dbPatients = patients.slice(initialValue, initialValue + teamSize);

        initialValue+=teamSize;
        console.log(`initial value: ${initialValue}`);
        console.log(`dbClinicians: ${dbClinicians}`)
        for (const user of dbClinicians) {
            dbTeam.clinicians.push(user._id);
            user.team=dbTeam._id;
            await user.save();
        }
        for (const patient of dbPatients){
            dbTeam.patients.push(patient._id);
        }
        console.log(`Team saved! _id = ${dbTeam._id}`);
        await dbTeam.save();

        
    }

}

async function addResponsibleClinicians() {
    const teams = await Team.find();
    const patients = await Patient.find();
    let supervisors = [];
    for(const team of teams) {
        let s = team.supervisors;
        s.forEach(element => {
            supervisors.push(element);
        });
    }
    for (const patient of patients) {
        const randomNum = Math.floor(Math.random() * supervisors.length);
        patient.responsibleClinicians = supervisors[randomNum];
        const team = await Team.findOne({supervisors: supervisors[randomNum]});
        team.patients.push(patient)
        await team.save();
        await patient.save();
    }
}

async function addTasks() {
    const teams = await Team.find();
    for(const data of task) {
        //const randomTeam = teams[Math.floor(Math.random() * teams.length)];
        // add all task to team 1 for testing
        const randomTeam = teams[0];
        const teamPatients = randomTeam.patients;
        const teamClinicians = randomTeam.clinicians;
        const randomPatient = Math.floor(Math.random() * teamPatients.length);
        const randomClinician = Math.floor(Math.random()* teamClinicians.length);
        const newTask = {
            ...data,
            patient: teamPatients[randomPatient],
            clinician: teamClinicians[randomClinician],
            finished_at: Date.now() - Math.floor(Math.random() * 6 * 24 * 60 * 60 * 1000 )
        }
        const dbTask = new Task(newTask);
        await dbTask.save();
    }
}

async function addNotification() {
    // This should be modified later
    const userJant = await User.findOne({ fname: 'Jant' });
    const userJiewen = await User.findOne({ fname: 'Jiewen' });
    const userKevin = await User.findOne({ fname: 'Kevin' });


    const allPatients = await Patient.find();

    for (const data of notification) {
        // Notification related to transfer/add/remove patients
        if (data.type == 'Admin') {
            const patientIndex = Math.floor(Math.random() * allPatients.length)
            const patient = allPatients[patientIndex];
            const dbPatient = await Patient.findOne({ _id: patient._id })

            // console.log(`DB patient: ${dbPatient}`);

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

        } else if (data.type == 'Task') {

            // Notification related to tasks
            const patientIndex = Math.floor(Math.random() * allPatients.length)

            const patient = allPatients[patientIndex];
            const dbPatient = await Patient.findOne({ _id: patient._id })

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