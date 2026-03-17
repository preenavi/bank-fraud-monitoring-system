import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';
import './Analytics.css';

export default function Analytics({ dateRange }) {
  const trendData = [
    { name: 'Jan', 'Fraud Losses Avoided': 45000, 'Actual Losses': 12000 },
    { name: 'Feb', 'Fraud Losses Avoided': 52000, 'Actual Losses': 8000 },
    { name: 'Mar', 'Fraud Losses Avoided': 38000, 'Actual Losses': 15000 },
    { name: 'Apr', 'Fraud Losses Avoided': 65000, 'Actual Losses': 5000 },
    { name: 'May', 'Fraud Losses Avoided': 58000, 'Actual Losses': 9000 },
    { name: 'Jun', 'Fraud Losses Avoided': 71000, 'Actual Losses': 4500 },
  ];

  const typeData = [
    { name: 'Card Testing', value: 400 },
    { name: 'Account Takeover', value: 300 },
    { name: 'Synthetic Identity', value: 300 },
    { name: 'Phishing', value: 200 },
  ];
  
  const COLORS = ['#4fd1c5', '#f6ad55', '#fc8181', '#63b3ed'];

  return (
    <div className="analytics-container">
      <div className="analytics-card full-width">
        <h3 className="chart-title">Loss Prevention Trend ({dateRange})</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAvoided" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4fd1c5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4fd1c5" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fc8181" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#fc8181" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="#a0aec0" />
              <YAxis stroke="#a0aec0" tickFormatter={(value) => `$${value/1000}k`} />
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
              <Area type="monotone" dataKey="Fraud Losses Avoided" stroke="#4fd1c5" fillOpacity={1} fill="url(#colorAvoided)" />
              <Area type="monotone" dataKey="Actual Losses" stroke="#fc8181" fillOpacity={1} fill="url(#colorActual)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-grid">
        <div className="analytics-card">
          <h3 className="chart-title">Fraud Types Breakdown</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {typeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analytics-card">
          <h3 className="chart-title">Resolution Time (Hours)</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData.map(d => ({ name: d.name, hours: Math.floor(Math.random() * 20) + 10 }))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#a0aec0" />
                <YAxis stroke="#a0aec0" />
                <Tooltip />
                <Bar dataKey="hours" fill="#f6ad55" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
