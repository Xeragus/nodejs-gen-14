var express = require('express');
var router = express.Router();
const controller = require('../controllers/job-titles');

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .post('/', controller.postCreate)

module.exports = router;
