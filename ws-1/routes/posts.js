var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');
const upload = require('../utilities/upload/multer');

require('dotenv').config();

router.get('/', controller.all)
      .get('/:id', controller.getByID)
      .get('/users/:id', controller.getByUser)
      .post('/', upload.single('file'), jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create)
      .post('/:id/sentiment', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.sentiment)

module.exports = router;
