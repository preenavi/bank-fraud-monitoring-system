import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, FileText } from 'lucide-react';
import './KYCRecords.css';

export default function KYCRecords({ records }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' ? true : record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved': return 'badge-approved';
      case 'Pending': return 'badge-pending';
      case 'Rejected': return 'badge-rejected';
      case 'Under Review': return 'badge-review';
      default: return '';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="kyc-records-container">
      <div className="list-toolbar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search applicants or IDs..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-dropdown">
          <Filter size={18} className="filter-icon" />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Under Review">Under Review</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="kyc-table">
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Applicant Name</th>
              <th>Submitted Documents</th>
              <th>Risk Tier</th>
              <th>Submission Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length > 0 ? (
              filteredRecords.map(record => (
                <tr key={record.id}>
                  <td className="font-mono text-slate-400">{record.id}</td>
                  <td className="font-bold text-white">{record.applicant}</td>
                  <td>
                    <div className="docs-list">
                      {record.documents.map((doc, idx) => (
                        <span key={idx} className="doc-badge"><FileText size={12}/> {doc}</span>
                      ))}
                    </div>
                  </td>
                  <td className={`font-bold ${getRiskColor(record.risk)}`}>{record.risk}</td>
                  <td className="text-slate-400">{record.date}</td>
                  <td>
                    <span className={`status-badge ${getStatusBadge(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-approve" title="Approve">
                        <CheckCircle size={18} />
                      </button>
                      <button className="btn-reject" title="Reject">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-slate-400">
                  No applications found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
