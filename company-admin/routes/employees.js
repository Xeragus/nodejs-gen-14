var express = require('express');
var router = express.Router();

const employees = [];

router
      .get('/', (req, res) => {
        res.render('employees/index', { employees: employees })
      })
      .get('/create', (req, res) => {
        res.render('employees/create');
      })
      .post('/', (req, res) => {
        employees.push(req.body);

        res.redirect('/employees');
      })

module.exports = router;
