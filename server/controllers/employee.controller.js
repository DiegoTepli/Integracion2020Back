const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        country: req.body.country,
        city: req.body.city,
        dni: req.body.dni,
        gender: req.body.gender,
        civilStatus: req.body.civilStatus,
        mail: req.body.mail,
        phone: req.body.phone,
        address: req.body.address,
        dateOfAdmission: req.body.dateOfAdmission,
        employeeStatus: req.body.employeeStatus,
        position: req.body.position,
        workHours: req.body.workHours,
        turn: req.body.turn,
        schedule: req.body.schedule,
        salary: req.body.salary,
        familyResponsibilities: req.body.familyResponsibilities,
        cbu: req.body.cbu,
        bank: req.body.bank,
        socialWork: req.body.socialWork
        
        
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
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        country: req.body.country,
        city: req.body.city,
        dni: req.body.dni,
        gender: req.body.gender,
        civilStatus: req.body.civilStatus,
        mail: req.body.mail,
        phone: req.body.phone,
        address: req.body.address,
        dateOfAdmission: req.body.dateOfAdmission,
        employeeStatus: req.body.employeeStatus,
        position: req.body.position,
        workHours: req.body.workHours,
        turn: req.body.turn,
        schedule: req.body.schedule,
        salary: req.body.salary,
        familyResponsibilities: req.body.familyResponsibilities,
        cbu: req.body.cbu,
        bank: req.body.bank,
        socialWork: req.body.socialWork
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;