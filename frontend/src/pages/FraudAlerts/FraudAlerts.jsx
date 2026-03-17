import React, { useState } from 'react';
import FraudAlertList from '../../components/FraudAlertList/FraudAlertList';
import AlertDetails from '../../components/AlertDetails/AlertDetails';
import './FraudAlerts.css';

export default function FraudAlerts() {
  const [selectedAlert, setSelectedAlert] = useState(null);
  
  // Mock Data
  const [alerts, setAlerts] = useState([
    { id: 'SAR-2938', user: 'Client: John Doe', type: 'Unusual Geographical Login', amount: '$14,500.00', risk: 'High', status: 'Investigating', date: '1 hour ago', location: 'IP: 185.15.2.x (Russia)' },
    { id: 'SAR-2939', user: 'Client: ACME Corp', type: 'Velocity Limit Exceeded', amount: '$850.50', risk: 'Medium', status: 'Pending', date: '3 hours ago', location: 'IP: 192.168.1.1' },
    { id: 'KYC-102', user: 'Client: Jane Smith', type: 'Expired Documentation', amount: 'N/A', risk: 'Low', status: 'Resolved', date: 'Yesterday', location: 'Branch 04' },
    { id: 'OVR-1145', user: 'Employee: S. Rogers', type: 'Authorization Override', amount: '$50,000.00', risk: 'High', status: 'Pending', date: 'Yesterday', location: 'Internal Subnet' },
    { id: 'FRD-9022', user: 'Subject: Branch 4 Team', type: 'Systematic Structuring', amount: '$1.2M', risk: 'High', status: 'Investigating', date: '2 days ago', location: 'Multiple Regions' },
    { id: 'ACC-5521', user: 'Client: R. Johnson', type: 'Account Takeover Attempt', amount: 'N/A', risk: 'High', status: 'Resolved', date: 'Last week', location: 'IP: 45.2.11.x' },
  ]);

  const handleSelectAlert = (alert) => {
    setSelectedAlert(alert);
  };

  const handleCloseModal = () => {
    setSelectedAlert(null);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: newStatus } : a));
    setSelectedAlert(null); // Close modal after action
  };

  return (
    <div className="fraud-alerts-page">
      <div className="page-header">
        <h1 className="page-title">Fraud Operations Inbox</h1>
        <p className="page-subtitle">Review, investigate, and action flagged anomalies</p>
      </div>

      <FraudAlertList alerts={alerts} onSelectAlert={handleSelectAlert} />

      {selectedAlert && (
        <AlertDetails 
          alert={selectedAlert} 
          onClose={handleCloseModal} 
          onUpdateStatus={handleUpdateStatus} 
        />
      )}
    </div>
  );
}