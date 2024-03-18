const express = require("express");
const loginuserdata = require("../controller/login");
const verifykey = require("../helper/secratekey");

const router = express.Router();

router.post("/login", 
// verifykey, 
loginuserdata.loginuser);

module.exports = router;
