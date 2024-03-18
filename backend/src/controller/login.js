const bcrypt = require("bcrypt");
const employeedata = require("../model/db.model");

const loginuser = async (req, res, next) => {
  const { f_userName, f_pwd } = req.body;
  const user = await employeedata.modeldata.findOne({ f_userName });
  if (!user) {
    return res.status(401).json({ error: "wrong username" });
  }
  const passwordMatch = await bcrypt.compare(f_pwd, user.f_pwd);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Invalid password" });
  }
  res
    .status(200)
    .json({ message: "Username and password verified successfully" });
  next();
};

module.exports = { loginuser };
