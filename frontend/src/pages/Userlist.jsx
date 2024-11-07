import React, { useState } from 'react';
import '../styles/userList.css';

const UserList = () => {
    // Sample user data
    const [users, setUsers] = useState([]);

    // Function to delete a user by ID
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="user-list">
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
