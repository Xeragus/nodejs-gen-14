var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

/**
 * MVC: Model View Controller
 */

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .post('/', controller.postCreate)

module.exports = router;
