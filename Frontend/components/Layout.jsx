import React from "react";
import { Link } from "react-router-dom";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn() ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}
