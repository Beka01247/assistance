import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from '../assets/userinfo';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
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
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-4">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex justify-between items-center w-full">
                <div>
                <p className='text-gray-600'>{user.email}</p>
                </div>
                <UserInfo user={user} />
            </div>
            </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">  
        <a href="/" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Return to Login Page</a>
      </div>
    </div>
  );
}

export default AdminDashboard;
