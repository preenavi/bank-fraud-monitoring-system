import React from 'react';
import { X, CheckCircle, AlertTriangle, Shield, Clock, FileText } from 'lucide-react';
import './AlertDetails.css';

export default function AlertDetails({ alert, onClose, onUpdateStatus }) {
  if (!alert) return null;

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="alert-details-overlay">
      <div className="alert-details-modal">
        <div className="modal-header">
          <div>
            <span className="modal-title">Alert Details:</span>
            <span className="modal-id">{alert.id}</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="detail-section">
            <h3 className="section-title"><AlertTriangle size={18} className="mr-2 inline" /> Incident Overview</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Type</span>
                <span className="detail-value">{alert.type}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Risk Level</span>
                <span className={`detail-value ${getRiskColor(alert.risk)} font-bold`}>{alert.risk}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Detected On</span>
                <span className="detail-value">{alert.date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Current Status</span>
                <span className="detail-value status-badge">{alert.status}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3 className="section-title"><Shield size={18} className="mr-2 inline" /> Entity Information</h3>
            <div className="detail-grid">
              <div className="detail-item full-width">
                <span className="detail-label">Subject User/Account</span>
                <span className="detail-value">{alert.user}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Transaction Amount</span>
                <span className="detail-value font-mono">{alert.amount}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location/IP</span>
                <span className="detail-value">{alert.location || '192.168.1.1 (Proxy)'}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3 className="section-title"><FileText size={18} className="mr-2 inline" /> AI Triggers & Notes</h3>
            <p className="detail-description">
              {alert.description || "The Anti-Fraud engine flagged this transaction due to a velocity mismatch and abnormal geographic routing compared to the user's historical baseline profile."}
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="action-btn investigate" onClick={() => onUpdateStatus(alert.id, 'Investigating')}>
            <Clock size={16} /> Mark as Investigating
          </button>
          <button className="action-btn resolve" onClick={() => onUpdateStatus(alert.id, 'Resolved')}>
            <CheckCircle size={16} /> Mark as Resolved
          </button>
        </div>
      </div>
    </div>
  );
}
