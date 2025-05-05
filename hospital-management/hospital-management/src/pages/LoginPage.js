import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'doctor') navigate('/doctor/dashboard');
    else if (role === 'patient') navigate('/patient/dashboard');
    else if (role === 'receptionist') navigate('/receptionist/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Hospital Login</h2>
        <select
          className="w-full mb-4 p-2 border"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="receptionist">Receptionist</option>
        </select>
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
