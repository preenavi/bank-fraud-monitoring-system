import React from 'react';
import './ActivityLogs.css';

const MOCK_LOGS = [
  { id: 1, type: 'warning', title: 'Multiple Failed Logins', desc: 'Employee E103 attempted to login 5 times with incorrect password.', user: 'System', time: '10 mins ago', icon: '⚠️' },
  { id: 2, type: 'info', title: 'Bulk Download Started', desc: 'John Doe initiated an export of 500 transaction records.', user: 'John Doe', time: '1 hour ago', icon: '📥' },
  { id: 3, type: 'critical', title: 'Unauthorized Override', desc: 'Attempted to override fraud flag on account 4829-****-1102.', user: 'Jane Smith', time: '3 hours ago', icon: '🚨' },
  { id: 4, type: 'info', title: 'Shift Started', desc: 'Reviewer team clocked in for evening shift.', user: 'System', time: '5 hours ago', icon: '⏱️' },
];

export default function ActivityLogs() {
  return (
    <div className="activity-logs-container">
      <h3>Recent Activity logs</h3>
      <div className="log-list">
        {MOCK_LOGS.map(log => (
          <div key={log.id} className={`log-item ${log.type}`}>
            <div className="log-icon">{log.icon}</div>
            <div className="log-content">
              <div className="log-title">{log.title}</div>
              <div className="log-desc">{log.desc}</div>
              <div className="log-meta">
                <span className="log-user">By: {log.user}</span>
                <span className="log-time">{log.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
