// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [testMsg, setTestMsg] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/test')
//       .then(res => setTestMsg(res.data.message))
//       .catch(err => console.error(err));
//   }, []);

//   return(
//     <>
//         <h2>Secure Blog</h2>
//         <p>{testMsg}</p>
//     </>
//   );
// }

// export default App
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "../components/Layout";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import DashboardPage from "../pages/DashboardPage";
// import LogoutPage from "../pages/LogoutPage";
// import ProtectedRoute from "../components/ProtectedRoute";
// import Home from "../pages/Home";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardPage from "../pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

