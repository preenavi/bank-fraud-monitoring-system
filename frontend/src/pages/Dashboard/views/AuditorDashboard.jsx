import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Globe, Archive, AlertTriangle, ArrowRight } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function AuditorDashboard() {
  const navigate = useNavigate();

  const barData = [
    { name: 'Jan', value: 3 },
    { name: 'Feb', value: 8 },
    { name: 'Mar', value: 12 },
    { name: 'Apr', value: 5 },
    { name: 'May', value: 14 },
  ];

  const lineData = [
    { name: 'Q1', 'Audit Triggers': 120, 'Verified Fraud Rings': 4 },
    { name: 'Q2', 'Audit Triggers': 150, 'Verified Fraud Rings': 2 },
    { name: 'Q3', 'Audit Triggers': 110, 'Verified Fraud Rings': 6 },
    { name: 'Q4', 'Audit Triggers': 180, 'Verified Fraud Rings': 3 },
  ];

  const auditLogData = [
    { id: 'FRD-9021', user: 'Subject: Employee A.J', amount: 'N/A', risk: 'Medium', status: 'Resolved', date: 'Yesterday' },
    { id: 'FRD-9022', user: 'Subject: Branch 4 Team', amount: '$1.2M', risk: 'High', status: 'Investigating', date: '2 days ago' },
    { id: 'FRD-9023', user: 'Subject: Cross-Border Transfers', amount: 'N/A', risk: 'High', status: 'Pending', date: 'Last week' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Cross-Branch Mules Detected" value="14" icon={Globe} percentageChange={15.2} trendingUp={true} />
        <StatsCard title="Regulatory Violations Flagged" value="2" icon={AlertTriangle} percentageChange={50.0} trendingUp={false} />
        <StatsCard title="Unresolved Internal Fraud" value="8" icon={Archive} percentageChange={2.1} trendingUp={false} />
        <StatsCard title="Employee Collusion Risk" value="4.2%" icon={Search} percentageChange={0.5} trendingUp={false} />
      </div>

      <div className="dashboard-content">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-12px' }}>
          <button 
            className="action-btn resolve" 
            onClick={() => navigate('/reports')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'linear-gradient(90deg, #4fd1c5, #319795)', color: 'white', border: 'none' }}
          >
            View Executive Fraud Reports <ArrowRight size={16} />
          </button>
        </div>

        <Charts 
          barChartTitle="Cross-Branch Mule Networks Detected" barChartData={barData}
          lineChartTitle="Audit Triggers vs Verified Fraud Rings" lineChartData={lineData} 
        />
        <FraudSummary title="Deep-Dive Internal Fraud Investigations" data={auditLogData} />
      </div>
    </>
  );
}
