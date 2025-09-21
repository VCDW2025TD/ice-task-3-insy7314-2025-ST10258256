import React, { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/protected"); 
        setMessage(res.data.message);
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
