const bcrypt = require('bcrypt');
const employeedata = require('../model/db.model');

const createUser = async () => {
  const existingUser = await employeedata.modeldata.findOne({
    f_userName: 'practice@123'
  });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash('practice@123', 10);
    const newUser = new employeedata.modeldata({
      f_userName: 'practice@123',
      f_pwd: hashedPassword,
      f_namelogin: 'Subhashree'
    });
    await newUser.save();
    console.log('Static user created successfully');
  } else {
    console.log('Static user already exists');
  }
};

module.exports = createUser;
