const express = require('express');
const router = express.Router();

const register = require('../Controllers/Register');
const login = require('../Controllers/Login');

router.post('/register', register.userRegister);
router.post('/login', login.userLogin);
router.get('/get-data-login', login.getDataLogin);

module.exports = router;