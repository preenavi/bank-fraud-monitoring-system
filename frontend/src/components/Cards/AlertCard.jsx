import React from 'react';
import { AlertCircle, Clock, ShieldAlert } from 'lucide-react';
import './AlertCard.css';

export default function AlertCard({ alert, onClick }) {
  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'risk-high';
      case 'medium': return 'risk-medium';
      case 'low': return 'risk-low';
      default: return '';
    }
  };

  return (
    <div className={`alert-card ${getRiskColor(alert.risk)}`} onClick={() => onClick(alert)}>
      <div className="alert-card-header">
        <span className="alert-id">{alert.id}</span>
        <span className={`badge ${getRiskColor(alert.risk)}`}>{alert.risk} Risk</span>
      </div>
      
      <div className="alert-card-body">
        <h4 className="alert-type">{alert.type}</h4>
        <p className="alert-user">User: {alert.user}</p>
        <p className="alert-amount">Amount: {alert.amount}</p>
      </div>

      <div className="alert-card-footer">
        <div className="status-indicator">
          {alert.status === 'Pending' ? <AlertCircle size={14} /> : <Clock size={14} />}
          <span>{alert.status}</span>
        </div>
        <span className="alert-date">{alert.date}</span>
      </div>
    </div>
  );
}
