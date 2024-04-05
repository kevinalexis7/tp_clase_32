const express = require('express');
const { index, wellcome } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router
  .get('/', index)
  .get('/Bienvenido', wellcome)

module.exports = router;