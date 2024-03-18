const mongoose = require("mongoose");

const schemaData = new mongoose.Schema({
  f_no: {
    type: String,
    required: false,
  },
  f_userName: {
    type: String,
    required: false,
  },
  f_pwd: {
    type: String,
    required: false,
  },
  f_namelogin: { type: String, required: false, type: String },
  f_Name: {
    type: String,
    required: false,
  },
  f_Email: {
    type: String,
    required: false,
  },
  f_Mobile: {
    type: Number,
    required: false,
  },
  f_Designation: {
    type: String,
    required: false,
    enum: ["HR", "Manager", "Sales"],
  },
  f_gender: {
    type: String,
    required: false,
    enum: ["male", "female"],
  },
  f_course: {
    type: String,
    required: false,
    enum: ["MCA", "BCA", "BSC"],
  },
  f_Createddate: {
    type: String,
    required: false,
  },
  f_imges: {
    type: String,
    required: false,
  },
 
},
{
  timestamps: true 
}

);

module.exports = schemaData;
