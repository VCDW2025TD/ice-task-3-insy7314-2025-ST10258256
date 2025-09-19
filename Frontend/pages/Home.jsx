import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // optional, for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to SecureBlog</h1>
      <div className="buttons">
        <Link to="/Register">
          <button>Register</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
