const Employee = require('../models/employee');

module.exports = {
  getAll: async (req, res) => {
    const employees = await Employee.find();

    res.render('employees/index', { employees: employees });
  },
  getCreate: (req, res) => {
    res.render('employees/create');
  },
  postCreate: async (req, res) => {
    req.body.email += '@north-company-admin.com';
    await Employee.create(req.body);

    res.redirect('/employees');
  }
}