const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  
    Nombre: {type: String},
    Apellido: {type: String},
    FechaDeNacimiento: {type: String},
    Pais: {type: String},
    Ciudad: {type: String},
    DNI: {type: Number},
    Sexo: {type: String},
    EstadoCivil: {type: String},
    CorreoElectronico: {type: String},
    Telefono: {type: Number},
    Direccion: {type: String},
    FechaDeIngreso: {type: String},
    Estado: {type: String},
    Puesto: {type: String},
    HorasDeTrabajo: {type: Number},
    Turno: {type: String},
    Horario: {type: String},
    Sueldo: {type: Number},
    CargasFamiliares: {type: Number},
    CBU: {type: Number},
    Banco: {type: String},
    ObraSocial: {type: String},
});

module.exports = mongoose.model('Employee', employeeSchema);