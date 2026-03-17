import React, { useState } from 'react';
import { Download, Filter, Calendar } from 'lucide-react';
import Analytics from '../../components/Analytics/Analytics';
import './Reports.css';

export default function Reports() {
  const [dateRange, setDateRange] = useState('Last 6 Months');

  const handleExport = () => {
    alert('Exporting report as PDF...');
  };

  return (
    <div className="reports-page">
      <div className="page-header reports-header">
        <div>
          <h1 className="page-title">Executive Reports & Analytics</h1>
          <p className="page-subtitle">Analyze fraud trends, losses avoided, and generation of compliance exports.</p>
        </div>

        <div className="reports-controls">
          <div className="filter-dropdown">
            <Calendar size={18} className="filter-icon" />
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option value="This Month">This Month</option>
              <option value="Last Quarter">Last Quarter</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Year to Date">Year to Date</option>
            </select>
          </div>
          
          <button className="export-btn" onClick={handleExport}>
            <Download size={18} /> Export Report
          </button>
        </div>
      </div>

      <Analytics dateRange={dateRange} />
    </div>
  );
}