import React, { useEffect, useState } from "react";
import { baseurl } from "../service/baseurl";
import { endpoint } from "../service/endpoint";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [alldata, setalldata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseurl}${endpoint.getall}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setalldata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    const selectedEmployee = alldata.find((item) => item._id === id);
    navigate("/update", { state: { employee: selectedEmployee } });
  };

  const handleDelete = async (id) => {
    console.log("Delete clicked for ID:", id);
    try {
      const response = await fetch(
        `${baseurl}${endpoint.deleteemployee}/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      toast.success("Employee deleted successfully");
      setalldata((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Failed to delete employee");
    }
  };

  

  return (
    <div className="table_component" role="region" tabIndex="0">
      <table>
        <caption>Table 1</caption>
        <thead>
          <tr>
            <th>unique id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Created date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.f_Name}</td>
              <td>{item.f_Email}</td>
              <td>{item.f_Mobile}</td>
              <td>{item.f_Designation}</td>
              <td>{item.f_gender}</td>
              <td>{item.f_course}</td>
              <td>{item.createdAt}</td>
              <td className="button">
                <button onClick={() => navigate("/details", { state: { employee: item } })}>Add employee</button>
                <button onClick={() => handleEdit(item._id)}>Update</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
