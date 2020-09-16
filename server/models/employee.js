const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  
    name: {type: String},
    lastName: {type: String},
    dateOfBirth: {type: String},
    country: {type: String},
    city: {type: String},
    dni: {type: Number},
    gender: {type: String},
    civilStatus: {type: String},
    mail: {type: String},
    phone: {type: Number},
    address: {type: String},
    dateOfAdmission: {type: String},
    employeeStatus: {type: String},
    position: {type: String},
    workHours: {type: Number},
    turn: {type: String},
    schedule: {type: String},
    salary: {type: Number},
    familyResponsibilities: {type: Number},
    cbu: {type: Number},
    bank: {type: String},
    socialWork: {type: String},
});

module.exports = mongoose.model('Employee', employeeSchema);