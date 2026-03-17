import React from 'react';
import { Users, TrendingUp, AlertOctagon, Briefcase } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function ManagerDashboard() {
  const barData = [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 2000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 2390 },
    { name: 'Sun', value: 3490 },
  ];

  const lineData = [
    { name: 'Week 1', BranchActivity: 4000, BranchFraud: 40 },
    { name: 'Week 2', BranchActivity: 3000, BranchFraud: 30 },
    { name: 'Week 3', BranchActivity: 2000, BranchFraud: 20 },
    { name: 'Week 4', BranchActivity: 2780, BranchFraud: 27 },
  ];

  const escalatedAlerts = [
    { id: 'TRX-1092', user: 'Charlie Brown', amount: '$15,000.00', risk: 'High', status: 'Pending', date: '10 mins ago' },
    { id: 'TRX-1123', user: 'Diana Prince', amount: '$22,500.00', risk: 'High', status: 'Investigating', date: '1 hour ago' },
    { id: 'TRX-1145', user: 'Evan Wright', amount: '$50,000.00', risk: 'High', status: 'Pending', date: '3 hours ago' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Branch Volume" value="18,450" icon={TrendingUp} percentageChange={8.4} trendingUp={true} />
        <StatsCard title="Branch Fraud Rate" value="1.2%" icon={AlertOctagon} percentageChange={0.1} trendingUp={false} />
        <StatsCard title="Escalated Alerts" value="24" icon={AlertOctagon} percentageChange={5.0} trendingUp={true} />
        <StatsCard title="Active Employees" value="45" icon={Users} percentageChange={0.0} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="Branch Transaction Volume" barChartData={barData}
          lineChartTitle="Branch Activity vs Fraud" lineChartData={lineData} 
        />
        <FraudSummary title="Escalated Alerts (Requires Manager Approval)" data={escalatedAlerts} />
      </div>
    </>
  );
}
