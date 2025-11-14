import React from 'react'
import AdminHome from '../Pages/AdminHome'
import UserHome from '../Pages/UserHome'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={localStorage.getItem("role") === "admin" ? <AdminHome/> : <Navigate to="/"/>}/>
            <Route path="/user" element={localStorage.getItem("role") === "user" ? <UserHome/> : <Navigate to="/"/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
