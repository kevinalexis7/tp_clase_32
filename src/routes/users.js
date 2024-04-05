const express = require('express');
const { login, processRegister, processLogin, register, logout, profile } = require('../controllers/userController');
const router = express.Router();

/* GET home page. */
router
  .get('/', login)
  .get('/', processLogin)
  .get('/', processRegister)
  .get('/', register)
  .get('/', logout)
  .get('/', profile)

  module.exports = router;