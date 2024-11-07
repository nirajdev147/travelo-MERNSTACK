import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/admin.css';


const AdminDashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [user, setUser] = useState([]);

    const handleUserManagement = () => {
        // Navigate to User Management page
        navigate('/user-management');
    };

    const handleTourManagement = () => {
        // Navigate to Tour Management page
        navigate('/tour-management');
    };

    const handleSearch = (query) => {
        
        console.log("Search:", query);
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="admin-controls">
                <button onClick={handleUserManagement}>User Management</button>
                <button onClick={handleTourManagement}>Tour Management</button>
                <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
            </div>
        </div>
    );
};

export default AdminDashboard;