import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
    
    return (
        <div>
            <h1>Dashboard</h1>
            {error && <div className="error">{error}</div>}
            {me ? (
                <div>
                    <h2>Welcome, {me.email}</h2>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}