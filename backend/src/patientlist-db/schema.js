import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    id: {type: String},
    fname: {type: String},
    lname: {type: String},
    description: {type: String},
    location: {type: String},
    responsibleClinicians: {type: String},
    //responsibleClinicians:{ type: Schema.Types.ObjectId, ref: 'User'},
    quickAdd: { type: String },
    notification: [{type: Schema.Types.ObjectId, ref:'Notification'}],
    created_at: { type: Date, default: Date.now},
    progress: {
        problems: {type: String},
        history:{type: String},
        plan:{type: String},
    },
    birth_date: {type: Date},
    gender: {type: String},
})

const userSchema = new Schema({
    // Jant: temporary hardcode for testing
    id:{type: Number},
    fname: {type: String},
    lname: {type: String},
    phone: {type: Number},
    email: {type: String},
    password: {type: String}, //??
    isSupervisor: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    role: {type: String},
    avatar: {type: String},
    // Jant: add team
    team: { type: Number },
    notification: [{type: Schema.Types.ObjectId, ref:'Notification'}],
    created_at: { type: Date, default: Date.now},
})


const taskSchema = new Schema({
    id: Number,
    name: String,
    type: String,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    clinician: { type: Number},
    priority: Number,
    notification: [{type: Schema.Types.ObjectId, ref:'Notification'}],
    created_at: { type: Date, default: Date.now },
    finished_at: { type: Date },
    status: { type: Number },
    result:{ type: String },
})

const teamSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient'}],
    clinicians: [{type: Number}],
    id: Number,
    name: String,
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient'}],
    clinicians: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    supervisors: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const notificationSchema = new Schema({
    id: Number,
    type: String,
    recipient: [{type: Schema.Types.ObjectId, ref:'User'}],
    sender: [{type: Schema.Types.ObjectId, ref:'User'}],
    patient:[{ type: Schema.Types.ObjectId, ref: 'Patient'}],
    entity: String,
    created_at:{ type: Date, default: Date.now},
})

export const Patient = mongoose.model('Patient', patientSchema);
export const User = mongoose.model('User', userSchema);
export const Task = mongoose.model('Task', taskSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Notification = mongoose.model('Notification', notificationSchema);