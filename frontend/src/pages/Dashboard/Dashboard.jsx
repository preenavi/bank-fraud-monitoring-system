import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EmployeeDashboard from './views/EmployeeDashboard';
import ManagerDashboard from './views/ManagerDashboard';
import AuditorDashboard from './views/AuditorDashboard';
import AdminDashboard from './views/AdminDashboard';
import './Dashboard.css';

export default function Dashboard() {
  const location = useLocation();
  // Get role directly from the router state, default to Employee if accessed directly
  const userRole = location.state?.role || 'Employee';

  const renderDashboardView = () => {
    switch (userRole) {
      case 'Employee':
        return <EmployeeDashboard />;
      case 'Manager':
        return <ManagerDashboard />;
      case 'Auditor':
        return <AuditorDashboard />;
      case 'Admin':
        return <AdminDashboard />;
      default:
        return <EmployeeDashboard />;
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">Monitor and analyze activity tailored to your role</p>
        </div>
        
        <div className="dashboard-controls" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span className="role-badge">Logged in as: {userRole}</span>

          {/* Regular Date Filter */}
          <select className="date-select">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Render the dynamically selected view */}
      {renderDashboardView()}

    </div>
  );
}