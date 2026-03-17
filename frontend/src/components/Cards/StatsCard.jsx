import React from 'react';
import './StatsCard.css';

export default function StatsCard({ title, value, icon: Icon, percentageChange, trendingUp }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <h3 className="stats-card-title">{title}</h3>
        <div className="stats-card-icon">
          {Icon && <Icon size={20} />}
        </div>
      </div>
      <div className="stats-card-value">{value}</div>
      <div className={`stats-card-trend ${trendingUp ? 'trend-up' : 'trend-down'}`}>
        <span className="trend-percentage">
          {trendingUp ? '↑' : '↓'} {percentageChange}%
        </span>
        <span className="trend-label">vs last month</span>
      </div>
    </div>
  );
}
