import React from 'react';

function PatientDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Patient Dashboard</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>Book Appointment</li>
        <li>View Medical History</li>
        <li>Download Prescriptions</li>
      </ul>
    </div>
  );
}

export default PatientDashboard;
