import React from 'react';
import { ShieldAlert, BookOpen, AlertTriangle, UserCheck } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function EmployeeDashboard() {
  const barData = [
    { name: 'Mon', value: 4 },
    { name: 'Tue', value: 7 },
    { name: 'Wed', value: 2 },
    { name: 'Thu', value: 5 },
    { name: 'Fri', value: 8 },
  ];

  const lineData = [
    { name: 'Week 1', 'My Flagged Transactions': 12, 'Cleared by Compliance': 10 },
    { name: 'Week 2', 'My Flagged Transactions': 18, 'Cleared by Compliance': 15 },
    { name: 'Week 3', 'My Flagged Transactions': 9, 'Cleared by Compliance': 8 },
    { name: 'Week 4', 'My Flagged Transactions': 14, 'Cleared by Compliance': 12 },
  ];

  const alertsData = [
    { id: 'SAR-2938', user: 'Client: John Doe', amount: '$14,500.00', risk: 'High', status: 'Investigating', date: '1 hour ago' },
    { id: 'SAR-2939', user: 'Client: ACME Corp', amount: '$850.50', risk: 'Medium', status: 'Pending', date: '3 hours ago' },
    { id: 'KYC-102', user: 'Client: Jane Smith', amount: 'N/A', risk: 'Low', status: 'Resolved', date: 'Yesterday' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Suspicious Tx Flagged by Me" value="43" icon={ShieldAlert} percentageChange={12.5} trendingUp={true} />
        <StatsCard title="My Anomalous Overrides" value="0" icon={AlertTriangle} percentageChange={100} trendingUp={false} />
        <StatsCard title="High-Risk Customer Interactions" value="8" icon={UserCheck} percentageChange={2.1} trendingUp={true} />
        <StatsCard title="AML/KYC Training Status" value="100%" icon={BookOpen} percentageChange={0} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="My Fraud Flagging Activity (This Week)" barChartData={barData}
          lineChartTitle="My Flags vs Compliance Clearance" lineChartData={lineData} 
        />
        <FraudSummary title="My Recent Suspicious Activity Reports (SARs)" data={alertsData} />
      </div>
    </>
  );
}
