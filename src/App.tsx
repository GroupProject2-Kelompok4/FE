import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AddMentee from "./pages/AddNewMentee";
import MenteeLog from "./pages/MenteeLog";
import ClassList from "./pages/ClassList";
import MenteeList from "./pages/MenteeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addnewmente" element={<AddMentee />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/classlist" element={<ClassList />} />
        <Route path="/menteelist" element={<MenteeList />} />
        <Route path="/menteelog/:id" element={<MenteeLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
