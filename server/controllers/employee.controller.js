const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        FechaDeNacimiento: req.body.FechaDeNacimiento,
        Pais: req.body.Pais,
        Ciudad: req.body.Ciudad,
        DNI: req.body.DNI,
        Sexo: req.body.Sexo,
        EstadoCivil: req.body.EstadoCivil,
        CorreoElectronico: req.body.CorreoElectronico,
        Telefono: req.body.Telefono,
        Direccion: req.body.Direccion,
        FechaDeIngreso: req.body.FechaDeIngreso,
        Estado: req.body.Estado,
        Puesto: req.body.Puesto,
        HorasDeTrabajo: req.body.HorasDeTrabajo,
        Turno: req.body.Turno,
        Horario: req.body.Horario,
        Sueldo: req.body.Sueldo,
        CargasFamiliares: req.body.CargasFamiliares,
        CBU: req.body.CBU,
        Banco: req.body.Banco,
        ObraSocial: req.body.ObraSocial
        
        
    });
    await employee.save();
    res.json({status: 'Employee created'});
};

employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        FechaDeNacimiento: req.body.FechaDeNacimiento,
        Pais: req.body.Pais,
        Ciudad: req.body.Ciudad,
        DNI: req.body.DNI,
        Sexo: req.body.Sexo,
        EstadoCivil: req.body.EstadoCivil,
        CorreoElectronico: req.body.CorreoElectronico,
        Telefono: req.body.Telefono,
        Direccion: req.body.Direccion,
        FechaDeIngreso: req.body.FechaDeIngreso,
        Estado: req.body.Estado,
        Puesto: req.body.Puesto,
        HorasDeTrabajo: req.body.HorasDeTrabajo,
        Turno: req.body.Turno,
        Horario: req.body.Horario,
        Sueldo: req.body.Sueldo,
        CargasFamiliares: req.body.CargasFamiliares,
        CBU: req.body.CBU,
        Banco: req.body.Banco,
        ObraSocial: req.body.ObraSocial
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;