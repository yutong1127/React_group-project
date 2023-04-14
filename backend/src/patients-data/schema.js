import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {type: String},
    description: {type: String},
    location: {type: String},
    responsibleClinicians:{
        mrX: {type: Boolean, default: false},
        mrY: {type:Boolean, default: false},
    },
    quickAdd: { type: String },
    notification: { type: Boolean, default: false},
    created_at: { type: Date, default: Date.now},
})

export const Patient = mongoose.model('Patient', patientSchema);