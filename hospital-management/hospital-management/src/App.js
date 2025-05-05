import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientDashboard from './pages/patient/PatientDashboard';
import ReceptionistDashboard from './pages/receptionist/ReceptionistDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/receptionist/dashboard" element={<ReceptionistDashboard />} />
    </Routes>
  );
}

export default App;
