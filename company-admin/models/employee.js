const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
  },
  job_title: {
    type: String,
    required: ['Каква порака сакаме ние']
  }
});

module.exports = mongoose.model('employee', employeeSchema);
