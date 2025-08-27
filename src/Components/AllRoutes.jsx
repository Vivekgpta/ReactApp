import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import User from "../Pages/User";
import SingelUserPage from "../Pages/SingelUserPage";
import Private from "../Pages/Private";



function AllRoutes() {
  return (
    <div className="page-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Private><About /></Private>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<Private><User /></Private>} />
      <Route path="/user/:user_id" element={<SingelUserPage />} />
      <Route path="*" element={<h1>404 Something Went wrong</h1>}/>
    </Routes></div>
  );
}

export default AllRoutes;
