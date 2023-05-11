import { MongoMemoryServer } from 'mongodb-memory-server';
import patientRoute from '../patient';
import teamRoute from '../team';
import userRoute from '../user';
import mongoose from 'mongoose';
import express from 'express';
import request from 'supertest';
import { Patient, User, Team } from '../../../patientlist-db/schema';

let mongod;
let patientRepresentative;
const app = express();
app.use('/patient', patientRoute);
app.use('/team', teamRoute);
app.use('/user', userRoute);

const patients = [
    {
      _id: mongoose.Types.ObjectId('6455cea5e93e32b91ab55ed1'),
      fname: "Laureen",
      lname: "Lance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum lectus. Donec commodo mollis suscipit. Donec ut purus nec nibh pharetra finibus. Nunc vitae suscipit urna. Vivamus efficitur turpis nibh, nec tristique purus tempus eu. Sed finibus sagittis tortor hendrerit suscipit. Vestibulum porta ex quis dui volutpat, ac mollis arcu ornare. Fusce sit amet efficitur odio, eu pharetra augue. Suspendisse ut ullamcorper lorem. Aenean at odio in dui tempor eleifend. Nullam a viverra enim. Aenean nec felis mattis, pharetra magna in, molestie lacus.",
      location: "Ward 1",
      responsibleClinicians: null,
      quickAdd: 'blood-test',
      progress: {
        problems:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        history: 'Curabitur id ipsum lectus.',
        plan: 'Donec commodo mollis suscipit.',
    },
      birth_date: "1967-11-30T12:00:00.000+00:00",
      gender: "Female",
    },
    {
      _id: mongoose.Types.ObjectId('6455cea5e93e32b91ab55ed2'),
      fname: "Bram",
      lname: "Gene",
      description: "Aenean ac lorem facilisis, dignissim urna nec, malesuada erat. In consectetur libero at mauris vehicula venenatis. Nam pulvinar mattis posuere. Aenean ligula magna, ultrices nec vestibulum ut, rutrum vehicula nisl. Phasellus egestas placerat sapien eget malesuada. Proin nibh nisi, fermentum id tincidunt eu, iaculis eget erat. Ut sit amet odio sit amet felis tincidunt placerat. Vestibulum ac aliquet mauris. Pellentesque tincidunt vulputate magna et tristique.",
      location: "Ward 2",
      responsibleClinicians: null,
      quickAdd: 'radiology',
      progress: {
        problems:
            'Aenean ac lorem facilisis, dignissim urna nec, malesuada erat ',
        history: 'In consectetur libero at mauris vehicula venenatis.',
        plan: ' Nam pulvinar mattis posuere.',
    },
      birth_date: "1965-04-22T12:00:00.000+00:00",
      gender: "Male",
    }
]

const users = [
    {
      _id: mongoose.Types.ObjectId('6455cea6e93e32b91ab55f01'),
      fname: "Jant",
      lname: "Chan",
      phone: "0225881753",
      email: "jant.chan@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: true,
      isAdmin: false,
      role: "HS",
      avatar: "DoctorAvatar1",
    },
    {
      _id: mongoose.Types.ObjectId('6455cea6e93e32b91ab55f02'),
      fname: "Zhiyan",
      lname: "Hu",
      phone: "0225478594",
      email: "zhiyan.hu@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: true,
      isAdmin: false,
      role: "REG",
      avatar: "DoctorAvatar2",
    }
]


const teams = [
    {
        _id: mongoose.Types.ObjectId('6455cea6e93e32b91ab55f11'),
        id: 1,
        name: "Pink Panda",
        patients: [
            mongoose.Types.ObjectId('6455cea5e93e32b91ab55ed1'),
        ],
        clinicians: [
            mongoose.Types.ObjectId('6455cea6e93e32b91ab55f01'),
        ],
        supervisors: [
            mongoose.Types.ObjectId('6455cea6e93e32b91ab55f01')
        ]
    }, 
    {
        _id: mongoose.Types.ObjectId('6455cea6e93e32b91ab55f1b'),
        id: 2,
        name: "Red Panda",
        patients: [
            mongoose.Types.ObjectId('6455cea5e93e32b91ab55ed2'),
        ],
        clinicians: [
            mongoose.Types.ObjectId('6455cea6e93e32b91ab55f02'),
        ],
        supervisors: [
            mongoose.Types.ObjectId('6455cea6e93e32b91ab55f02')
        ]
    }
]

beforeAll(async () => {

    mongod = await MongoMemoryServer.create();

    const connectionString = mongod.getUri();
    await mongoose.connect(connectionString, { dbName: "project" }, { useNewUrlParser: true });

}, 5000);

beforeEach(async () => {

    await mongoose.connection.db.dropDatabase();
    await Patient.insertMany(patients);
    await User.insertMany(users);
    await Team.insertMany(teams);
    patientRepresentative  = await Patient.findOne();

})

afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
});

describe('GET /patient:id', () => {

    it('get a patient by id', (done) => {

        request(app)
            .get(`/patient/${patientRepresentative._id.toString()}`)
            .send()
            .expect(200)
            .end((err, res) => {    
                if (err) return done(err);
                const response = res.body;
                expect(response.fname).toBe(patientRepresentative.fname);
                expect(response.lname).toBe(patientRepresentative.lname);
                expect(response.description).toBe(patientRepresentative.description);
                return done();
            });
    });


    it('returns a 404 response when requesting with an invalid id', (done) => {

        request(app)
            .get('/patient/00000000000000000000000F')
            .send()
            .expect(404, done); 

    });

});


describe('PUT /patient:id', () => {

    it('update patient by id and content', (done) => {

        request(app)
            .put(`/patient/${patientRepresentative._id.toString()}`)
            .send({
                location: "home",
                description: "discharged"
            })
            .expect(200)
            .end((err, res) => {    
                if (err) return done(err);
                const response = res.body;
                expect(response).toBe(true);
                return done();
            });
    });

});


describe('DELETE /patient:id', () => {

    it('delete a patient by id', (done) => {

        request(app)
            .delete(`/patient/${patientRepresentative._id.toString()}`)
            .send()
            .expect(200)
            .end((err, res) => {    
                if (err) return done(err);
                const response = res.body;
                expect(response.deletedCount).toBe(1);

                return done();
            });
    });


    it('delete a patient by id', (done) => {

        request(app)
            .delete('/patient/00000000000000000000000F')
            .send()
            .expect(200)
            .end((err, res) => {    
                if (err) return done(err);
                const response = res.body;
                expect(response.deletedCount).toBe(0);

                return done();
            });
    });
});

describe('GET /user/retrieveAllSupervisors', () => {

    it('get all retrieveAllSupervisors', (done) => {

        request(app)
            .get('/user/retrieveAllSupervisors')
            .send()
            .expect(200)
            .end((err, res) => {    
                if (err) return done(err);
                const response = res.body;
                expect(response).toHaveLength(2);
                return done();
            });
    });

});