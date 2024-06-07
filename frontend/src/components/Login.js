import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-xl font-semibold text-gray-900">Welcome to the Help Web Page</h1>
      <button
        onClick={() => navigate('/admin-login')}
        className="mb-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Admin Login
      </button>
      <button
        onClick={() => navigate('/user-login')}
        className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
      >
        User Login
      </button>
    </div>
  );
}

export default Login;
