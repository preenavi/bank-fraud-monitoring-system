import React, { useState } from 'react';
import './EmployeeMonitor.css';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import ActivityLogs from '../../components/ActivityLogs/ActivityLogs';

export default function EmployeeMonitor() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="employee-monitor-page">
      <div className="page-header">
        <h1>Employee Monitoring</h1>
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search employees or transactions..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn">
            Filter Results
          </button>
        </div>
      </div>

      <div className="monitor-grid">
        <div className="main-column">
          <EmployeeTable searchTerm={searchTerm} />
          <TransactionTable />
        </div>
        <div className="side-column">
          <ActivityLogs />
        </div>
      </div>
    </div>
  );
}
