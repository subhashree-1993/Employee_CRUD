import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseurl } from "../service/baseurl";
import { endpoint } from "../service/endpoint";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Designation: "",
    f_gender: "",
    f_course: "",
  });

  useEffect(() => {
    if (location.state && location.state.employee) {
      const { f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_course } =
        location.state.employee;
      setFormData({
        f_Name,
        f_Email,
        f_Mobile,
        f_Designation,
        f_gender,
        f_course,
      });
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id } = location.state.employee; 
      const response = await fetch(`${baseurl}${endpoint.updateemployee}/${_id}`, { // Include employee ID in the URL
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update employee");
      }
      toast.success("Employee updated successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("Failed to update employee");
    }
  };
  

  return (
    <div className="update-container">
      <h2>Update Employee</h2>
      <form className="update-form" onSubmit={handleSubmit}>
        <label htmlFor="f_Name">Name:</label>
        <input
          type="text"
          id="f_Name"
          name="f_Name"
          value={formData.f_Name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="f_Email">Email:</label>
        <input
          type="email"
          id="f_Email"
          name="f_Email"
          value={formData.f_Email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="f_Mobile">Mobile:</label>
        <input
          type="tel"
          id="f_Mobile"
          name="f_Mobile"
          value={formData.f_Mobile}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="f_Designation">Designation:</label>
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
        <label htmlFor="f_gender">Gender:</label>
        <select
          id="f_gender"
          name="f_gender"
          value={formData.f_gender}
          onChange={handleInputChange}
          required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="f_course">Course:</label>
        <input
          type="text"
          id="f_course"
          name="f_course"
          value={formData.f_course}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
