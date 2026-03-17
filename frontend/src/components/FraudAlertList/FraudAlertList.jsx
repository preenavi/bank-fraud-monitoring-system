import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import AlertCard from '../Cards/AlertCard';
import './FraudAlertList.css';

export default function FraudAlertList({ alerts, onSelectAlert }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('All');

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          alert.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === 'All' ? true : alert.risk === riskFilter;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="fraud-alert-list-container">
      <div className="list-toolbar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search alerts or users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-dropdown">
          <Filter size={18} className="filter-icon" />
          <select value={riskFilter} onChange={(e) => setRiskFilter(e.target.value)}>
            <option value="All">All Risks</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
          </select>
        </div>
      </div>

      <div className="alert-grid">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} onClick={onSelectAlert} />
          ))
        ) : (
          <div className="no-alerts-msg">No matching alerts found.</div>
        )}
      </div>
    </div>
  );
}
