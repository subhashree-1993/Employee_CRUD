const express = require("express");
const employeegetdata = require("../controller/employee");
const verifykey = require("../helper/secratekey");

const router = express.Router();

router.post("/addemployee", verifykey, employeegetdata.employee.addemployee);
router.patch("/updateemployee/:id", verifykey, employeegetdata.employee.updateemployee);
router.delete("/deleteemployee/:id", verifykey, employeegetdata.employee.deleteemployee);
router.get("/get/:id", verifykey, employeegetdata.employee.getemployee);
router.get("/getall", verifykey, employeegetdata.employee.getallemployee);


module.exports = router;
