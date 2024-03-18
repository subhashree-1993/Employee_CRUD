import React, { useState } from "react";
import { baseurl } from "../service/baseurl";
import { endpoint } from "../service/endpoint";

const Dashbord = () => {
  const [formData, setFormData] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Designation: "",
    f_gender: "",
    f_course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${baseurl}${endpoint.addemployee}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to add employee");
    }
    setFormData({
      f_Name: "",
      f_Email: "",
      f_Mobile: "",
      f_Designation: "",
      f_gender: "",
      f_course: "",
    });

    console.log("Employee added successfully");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <fieldset>
          <ul id="nav">
            <li>Home</li>
            <li>Employee List</li>
            <li>Hukum Gupta</li>
            <li>Logout</li>
          </ul>

          <div id="dashbord">
            <div>
              <h4>Create Employee</h4>
            </div>

            <form onSubmit={handleSubmit} className="formdata">
              <label className="text" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="f_Name"
                name="f_Name"
                value={formData.f_Name}
                onChange={handleInputChange}
                required
              />
              <label className="text" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="f_Email"
                name="f_Email"
                value={formData.f_Email}
                onChange={handleInputChange}
                required
              />
              <label className="text" htmlFor="mobileNumber">
                Mobile number:
              </label>
              <input
                type="tel"
                id="f_Mobile"
                name="f_Mobile"
                value={formData.f_Mobile}
                onChange={handleInputChange}
                required
              />
              <label className="text" htmlFor="designation">
                Designation:
              </label>
              <select
                id="f_Designation"
                name="f_Designation"
                value={formData.f_Designation}
                onChange={handleInputChange}
                required>
                <option value="">Select designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
              <label className="text">Gender:</label>
              <div className="gender">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="f_gender"
                  value="male"
                  checked={formData.f_gender === "male"}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="f_gender"
                  value="female"
                  checked={formData.f_gender === "female"}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <label className="text">Course:</label>
              <div className="course">
                <label htmlFor="MCA">MCA</label>
                <input
                  type="checkbox"
                  id="MCA"
                  name="f_course"
                  value="MCA"
                  checked={formData.f_course === "MCA"}
                  onChange={handleInputChange}
                />
                <label htmlFor="BCA">BCA</label>
                <input
                  type="checkbox"
                  id="BCA"
                  name="f_course"
                  value="BCA"
                  checked={formData.f_course === "BCA"}
                  onChange={handleInputChange}
                />
                <label htmlFor="BSC">BSC</label>
                <input
                  type="checkbox"
                  id="BSC"
                  name="f_course"
                  value="BSC"
                  checked={formData.f_course === "BSC"}
                  onChange={handleInputChange}
                />
              </div>

              <label className="text" htmlFor="file">
                Image Upload:
              </label>
              <input type="file" id="file" name="file" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Dashbord;
