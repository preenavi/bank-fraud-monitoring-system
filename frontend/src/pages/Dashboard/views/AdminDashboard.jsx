import React from 'react';
import { Server, ShieldAlert, Cpu, Lock } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function AdminDashboard() {
  const barData = [
    { name: '00:00', value: 45 },
    { name: '04:00', value: 20 },
    { name: '08:00', value: 120 },
    { name: '12:00', value: 340 },
    { name: '16:00', value: 290 },
    { name: '20:00', value: 85 },
  ];

  const lineData = [
    { name: 'Day 1', 'Rules Fired': 4500, 'System Anomalies': 12 },
    { name: 'Day 2', 'Rules Fired': 4200, 'System Anomalies': 8 },
    { name: 'Day 3', 'Rules Fired': 5100, 'System Anomalies': 21 },
    { name: 'Day 4', 'Rules Fired': 4800, 'System Anomalies': 9 },
  ];

  const systemLogs = [
    { id: 'SEC-001', user: 'Unrecognized Device Login', amount: 'N/A', risk: 'High', status: 'Investigating', date: '5 mins ago' },
    { id: 'SEC-002', user: 'Rule Engine Override Attempt', amount: 'N/A', risk: 'High', status: 'Pending', date: '1 hour ago' },
    { id: 'SEC-003', user: 'Multiple Failed Employee Auth', amount: 'N/A', risk: 'Medium', status: 'Resolved', date: '3 hours ago' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Fraud Engine Rules Fired" value="18,492" icon={Cpu} percentageChange={3.2} trendingUp={true} />
        <StatsCard title="System Integrity Anomalies" value="42" icon={Server} percentageChange={1.4} trendingUp={false} />
        <StatsCard title="Failed Employee Logins" value="156" icon={Lock} percentageChange={12.5} trendingUp={true} />
        <StatsCard title="Blocked Malicious IPs" value="12,450" icon={ShieldAlert} percentageChange={5.2} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="Rule Activation Volume (Last 24h)" barChartData={barData}
          lineChartTitle="Fraud AI Rules Fired vs System Anomalies" lineChartData={lineData} 
        />
        <FraudSummary title="Critical Security & Authorization Logs" data={systemLogs} />
      </div>
    </>
  );
}
