import React from 'react';
import { CreditCard, CheckSquare, AlertTriangle, Activity } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function EmployeeDashboard() {
  const barData = [
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 150 },
    { name: 'Wed', value: 180 },
    { name: 'Thu', value: 130 },
    { name: 'Fri', value: 200 },
  ];

  const lineData = [
    { name: 'Week 1', MyAlerts: 5, Processed: 400 },
    { name: 'Week 2', MyAlerts: 8, Processed: 450 },
    { name: 'Week 3', MyAlerts: 3, Processed: 380 },
    { name: 'Week 4', MyAlerts: 6, Processed: 520 },
  ];

  const alertsData = [
    { id: 'TRX-9823', user: 'Alice Smith', amount: '$4,500.00', risk: 'High', status: 'Pending', date: 'Just now' },
    { id: 'TRX-8742', user: 'Bob Johnson', amount: '$120.50', risk: 'Low', status: 'Resolved', date: '2 hours ago' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="My Processed Volume" value="1,200" icon={CreditCard} percentageChange={4.2} trendingUp={true} />
        <StatsCard title="Pending KYC Approvals" value="14" icon={CheckSquare} percentageChange={1.5} trendingUp={false} />
        <StatsCard title="Alerts Assigned to Me" value="8" icon={AlertTriangle} percentageChange={12.0} trendingUp={false} />
        <StatsCard title="My Efficiency Score" value="98%" icon={Activity} percentageChange={0.5} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="My Handled Activity" barChartData={barData}
          lineChartTitle="My Processing vs Alerts" lineChartData={lineData} 
        />
        <FraudSummary title="Alerts Assigned To Me" data={alertsData} />
      </div>
    </>
  );
}
