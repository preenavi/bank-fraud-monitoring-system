import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, AlertOctagon, UserX, Users } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function ManagerDashboard() {
  const barData = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 15 },
    { name: 'Wed', value: 9 },
    { name: 'Thu', value: 20 },
    { name: 'Fri', value: 14 },
    { name: 'Sat', value: 8 },
    { name: 'Sun', value: 11 },
  ];

  const lineData = [
    { name: 'Week 1', 'Employee Overrides': 50, 'Escalated SARs': 40 },
    { name: 'Week 2', 'Employee Overrides': 45, 'Escalated SARs': 30 },
    { name: 'Week 3', 'Employee Overrides': 60, 'Escalated SARs': 20 },
    { name: 'Week 4', 'Employee Overrides': 35, 'Escalated SARs': 27 },
  ];

  const escalatedAlerts = [
    { id: 'OVR-1092', user: 'Employee: E. Wright', amount: '$150,000.00', risk: 'High', status: 'Pending', date: '10 mins ago' },
    { id: 'SAR-1123', user: 'Client: B. Wayne', amount: '$22,500.00', risk: 'High', status: 'Investigating', date: '1 hour ago' },
    { id: 'OVR-1145', user: 'Employee: S. Rogers', amount: '$50,000.00', risk: 'High', status: 'Pending', date: '3 hours ago' },
  ];

  return (
    <>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'flex-end' }}>
         <Link to="/monitor" style={{ textDecoration: 'none' }}>
           <button style={{ 
             display: 'flex', 
             alignItems: 'center', 
             gap: '8px', 
             padding: '10px 20px', 
             background: 'linear-gradient(90deg, #4fd1c5, #319795)', 
             color: 'white', 
             border: 'none', 
             borderRadius: '8px', 
             cursor: 'pointer',
             fontWeight: '600',
             boxShadow: '0 4px 6px rgba(49, 151, 149, 0.2)'
           }}>
             <Users size={18} />
             Open Employee Monitor
           </button>
         </Link>
      </div>

      <div className="stats-grid">
        <StatsCard title="Branch Fraud Referrals" value="89" icon={ShieldAlert} percentageChange={8.4} trendingUp={true} />
        <StatsCard title="Employee Override Anomalies" value="12" icon={AlertOctagon} percentageChange={5.1} trendingUp={false} />
        <StatsCard title="High-Risk Employees Monitored" value="3" icon={Eye} percentageChange={0.0} trendingUp={true} />
        <StatsCard title="Suspended Employees" value="1" icon={UserX} percentageChange={0.0} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="Daily Branch SARs Filed" barChartData={barData}
          lineChartTitle="Employee Overrides vs Escalated Risk" lineChartData={lineData} 
        />
        <FraudSummary title="Escalated Anomalies (Req. Manager Approval)" data={escalatedAlerts} />
      </div>
    </>
  );
}
