import React from "react";
import Login from "./Login/Login";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Dashbord from "./Dashbord/Dashbord";
import Details from "./Details/Details";
import Update from "./Update/Update";

const App = () => {
  return (
    <div>
      <div>
        <Main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/details" element={<Details />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default App;
