import React from "react";
import { Route, Routes } from "react-router-dom";
import Authpage from "./Auth/Authpage.jsx";
import Homepage from "./page/Homepage.jsx";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/auth" element={<Authpage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
