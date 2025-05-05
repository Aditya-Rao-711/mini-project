import React from 'react';

function ReceptionistDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Receptionist Dashboard</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>Register Patients</li>
        <li>Schedule Appointments</li>
        <li>Manage Billing</li>
      </ul>
    </div>
  );
}

export default ReceptionistDashboard;
