import React from 'react';

function DoctorDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>View Patients</li>
        <li>Update Records</li>
        <li>Write Prescriptions</li>
      </ul>
    </div>
  );
}

export default DoctorDashboard;
