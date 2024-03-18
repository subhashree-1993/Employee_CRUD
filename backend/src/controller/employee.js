const employee = {};
const employeedata = require("../model/db.model");

employee.addemployee = async (req, res) => {
  const { f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_course } =
    req.body;

  const newEmployee = new employeedata.modeldata({
    f_Name,
    f_Email,
    f_Mobile,
    f_Designation,
    f_gender,
    f_course,
  });

  const savedEmployee = await newEmployee.save();

  console.log("Data added successfully", savedEmployee);
  res.status(200).json(savedEmployee);
};

employee.updateemployee = async (req, res) => {
  let { id } = req.params;
  const { f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_course } =
    req.body;

  const update = await employeedata.modeldata.findByIdAndUpdate(
    id,
    {
      f_Name,
      f_Email,
      f_Mobile,
      f_Designation,
      f_gender,
      f_course,
    },
    { new: true }
  );

  if (!update) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.status(200).json(update);
  console.log("Update:", update);
};

employee.deleteemployee = async (req, res) => {
  let { id } = req.params;
  const deletedEmployee = await employeedata.modeldata.findByIdAndDelete(id);
  if (!deletedEmployee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.status(200).json({ message: "Employee deleted successfully" });
};

employee.getemployee = async (req, res) => {
  let { id } = req.params;
  const getdatafrom = await employeedata.modeldata.findById(id);
  if (!getdatafrom) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.status(200).json(getdatafrom);
};

employee.getallemployee = async (req, res) => {
  let getdatafrom = await employeedata.modeldata.find();
  res.status("200").json(getdatafrom);
};

module.exports = { employee };
