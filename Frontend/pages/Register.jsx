// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import API from '../services/api';
// import "../styles/Register.css";

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();


//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError('');

//      try {
//       const res = await API.post("/auth/register", { email, password });
//       const token = res.data.token;

//       localStorage.setItem("token", token);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err);
//       setError(
//         err.response?.data?.message || "Registration failed. Try again."
//       );
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// //         try {
// //             const response = await axios.post('http://localhost:5000/api/register', { email, password });
        

// //             localStorage.setItem('token', response.data.token);

// //             navigate('/dashboard');

// //         } catch (err) {
// //             console.error("Registration error: ", err);
// //             setError(err.response?.data?.message || 'Registration failed');
// //         };

// //     };

// //     return (
// //         <div className="register-container">
// //             <h2>Register</h2>
// //             <form onSubmit={handleRegister}>
// //                 <div>
// //                     <label>Email:</label>
// //                     <input
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password:</label>
// //                     <input
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 {error && <div className="error">{error}</div>}
// //                 <button type="submit">Register</button>
// //             </form>
// //         </div>
// //     );
// // };

// export default Register;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";
// import "../styles/Register.css";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(""); // reset previous errors

//     try {
//       const res = await API.post("/auth/register", { email, password });
//       const token = res.data.token;

//       // Save token in localStorage
//       localStorage.setItem("token", token);

//       // Navigate to dashboard after successful registration
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Registration error:", err);
//       setError(err.response?.data?.message || "Registration failed. Try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleRegister}>
//         <label>Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/register", { email, password });
      const token = res.data.token;

      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Registration error:", err.response || err);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

