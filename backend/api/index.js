const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");
const department = require("./department");
const test = require("./test");
const logout = require("./logout");
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(paymentApi);
router.use(department);
router.use(test);
router.use(logout);

module.exports = router;
