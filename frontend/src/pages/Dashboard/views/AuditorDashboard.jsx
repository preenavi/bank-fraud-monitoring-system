import React from 'react';
import { FileText, Clock, Archive, PieChart } from 'lucide-react';
import StatsCard from '../../../components/Cards/StatsCard';
import Charts from '../../../components/Charts/Charts';
import FraudSummary from '../../../components/FraudSummary/FraudSummary';

export default function AuditorDashboard() {
  const barData = [
    { name: 'Jan', value: 80 },
    { name: 'Feb', value: 95 },
    { name: 'Mar', value: 110 },
    { name: 'Apr', value: 105 },
    { name: 'May', value: 130 },
  ];

  const lineData = [
    { name: 'Q1', Audits: 120, Findings: 15 },
    { name: 'Q2', Audits: 150, Findings: 22 },
    { name: 'Q3', Audits: 110, Findings: 10 },
    { name: 'Q4', Audits: 180, Findings: 18 },
  ];

  const auditLogData = [
    { id: 'AUD-9021', user: 'System (Auto)', amount: 'N/A', risk: 'Medium', status: 'Resolved', date: 'Yesterday' },
    { id: 'AUD-9022', user: 'Branch Mgr A', amount: '$150,000.00', risk: 'High', status: 'Investigating', date: '2 days ago' },
    { id: 'AUD-9023', user: 'Compliance Officer', amount: 'N/A', risk: 'Low', status: 'Resolved', date: 'Last week' },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatsCard title="Total Audits Completed" value="542" icon={FileText} percentageChange={15.2} trendingUp={true} />
        <StatsCard title="Unresolved High-Risk Cases" value="8" icon={Archive} percentageChange={2.1} trendingUp={false} />
        <StatsCard title="Avg Resolution Time" value="4.2 Days" icon={Clock} percentageChange={1.1} trendingUp={true} />
        <StatsCard title="Compliance Score" value="94%" icon={PieChart} percentageChange={0.5} trendingUp={true} />
      </div>

      <div className="dashboard-content">
        <Charts 
          barChartTitle="Fraud Audits by Month" barChartData={barData}
          lineChartTitle="Quarterly Audits vs Findings" lineChartData={lineData} 
        />
        <FraudSummary title="Deep-Dive Investigation Logs" data={auditLogData} />
      </div>
    </>
  );
}
