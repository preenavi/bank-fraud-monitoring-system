import React from 'react';
import { Server, Users, Activity, ShieldAlert } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function AdminDashboard() {
  const barData = [
    { name: '00:00', value: 1200 },
    { name: '04:00', value: 800 },
    { name: '08:00', value: 3500 },
    { name: '12:00', value: 5200 },
    { name: '16:00', value: 4800 },
    { name: '20:00', value: 2100 },
  ];

  const lineData = [
    { name: 'Day 1', APIRequests: 45000, Errors: 120 },
    { name: 'Day 2', APIRequests: 42000, Errors: 80 },
    { name: 'Day 3', APIRequests: 51000, Errors: 210 },
    { name: 'Day 4', APIRequests: 48000, Errors: 90 },
  ];

  const systemLogs = [
    { id: 'SYS-001', user: 'Admin Router', amount: 'N/A', risk: 'High', status: 'Investigating', date: '5 mins ago' },
    { id: 'SYS-002', user: 'Auth Service', amount: 'N/A', risk: 'Medium', status: 'Resolved', date: '1 hour ago' },
    { id: 'SYS-003', user: 'Database Node 2', amount: 'N/A', risk: 'Low', status: 'Resolved', date: '3 hours ago' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Total System Users" value="1,245" icon={Users} percentageChange={3.2} trendingUp={true} />
        <StatsCard title="Active Sessions" value="842" icon={Activity} percentageChange={1.4} trendingUp={true} />
        <StatsCard title="System Error Rate" value="0.04%" icon={Server} percentageChange={0.01} trendingUp={false} />
        <StatsCard title="Global Fraud blocks" value="12,450" icon={ShieldAlert} percentageChange={5.2} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="Global API Usage (Last 24h)" barChartData={barData}
          lineChartTitle="System Health: API vs Errors" lineChartData={lineData} 
        />
        <FraudSummary title="Critical System Logs" data={systemLogs} />
      </div>
    </>
  );
}
