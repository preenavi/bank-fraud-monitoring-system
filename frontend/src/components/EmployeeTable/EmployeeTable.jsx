import React from 'react';
import './EmployeeTable.css';

const MOCK_EMPLOYEES = [
  { id: 'E101', name: 'John Doe', role: 'Support Agent', lastLogin: '2023-10-27 09:15 AM', status: 'Active', tasksCompleted: 42 },
  { id: 'E102', name: 'Jane Smith', role: 'Reviewer', lastLogin: '2023-10-27 08:30 AM', status: 'Active', tasksCompleted: 15 },
  { id: 'E103', name: 'Michael Johnson', role: 'Specialist', lastLogin: '2023-10-26 17:45 PM', status: 'Offline', tasksCompleted: 89 },
];

export default function EmployeeTable() {
  return (
    <div className="employee-table-container">
      <h3>Employee Status</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Last Login</th>
              <th>Tasks Completed</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_EMPLOYEES.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.lastLogin}</td>
                <td>{emp.tasksCompleted}</td>
                <td>
                  <span className={`status ${emp.status.toLowerCase()}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
