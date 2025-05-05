import React from 'react';

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>Manage Doctors</li>
        <li>Manage Patients</li>
        <li>Assign Roles</li>
        <li>View Reports</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
