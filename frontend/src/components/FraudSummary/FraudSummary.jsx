import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';
import './FraudSummary.css';

const RiskBadge = ({ risk }) => {
  const styles = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-green-100 text-green-700',
  };
  return <span className={`badge risk-badge ${risk.toLowerCase()}`}>{risk}</span>;
};

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Resolved':
      return <CheckCircle size={14} className="text-green-500" />;
    case 'Investigating':
      return <Clock size={14} className="text-yellow-500" />;
    case 'Pending':
      return <AlertCircle size={14} className="text-red-500" />;
    default:
      return null;
  }
};

export default function FraudSummary({ title = "Recent Alerts", data = [] }) {
  return (
    <div className="fraud-summary-container">
      <div className="fraud-summary-header">
        <h3 className="fraud-summary-title">{title}</h3>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="table-responsive">
        <table className="fraud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Risk Level</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((alert) => (
                <tr key={alert.id}>
                  <td className="font-medium">{alert.id}</td>
                  <td>{alert.user}</td>
                  <td className="font-medium text-slate-700">{alert.amount}</td>
                  <td>{alert.risk && <RiskBadge risk={alert.risk} />}</td>
                  <td>
                    {alert.status && (
                      <div className="status-cell">
                        <StatusIcon status={alert.status} />
                        <span>{alert.status}</span>
                      </div>
                    )}
                  </td>
                  <td className="text-slate-500">{alert.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
                  No recent records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
