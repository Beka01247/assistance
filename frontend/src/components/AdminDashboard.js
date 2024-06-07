import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            console.log(localStorage.getItem('token'));
            const response = await axios.get('http://localhost:4010/api/admin/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="flex flex-row">
            <div className="w-1/3 p-4">
                <h2 className="text-lg font-bold">Users List</h2>
                <ul className="mt-2">
                    {users.map(user => (
                        <li key={user.id} className="cursor-pointer" onClick={() => handleClick(user)}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            </div>
            {selectedUser && (
                <div className="w-2/3 p-4">
                    <h2 className="text-lg font-bold">User Details</h2>
                    <p><strong>ID:</strong> {selectedUser.id}</p>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Password:</strong> {selectedUser.password}</p>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
