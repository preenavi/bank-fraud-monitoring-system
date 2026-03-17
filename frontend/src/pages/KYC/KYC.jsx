import React, { useState } from 'react';
import KYCRecords from '../../components/KYCRecords/KYCRecords';
import './KYC.css';

export default function KYC() {
  const [records, setRecords] = useState([
    { id: 'APP-10045', applicant: 'Michael Chang', documents: ['Passport', 'Proof of Address'], risk: 'Low', date: '2023-10-25', status: 'Pending' },
    { id: 'APP-10046', applicant: 'Sarah Williams', documents: ['Driver License'], risk: 'Medium', date: '2023-10-25', status: 'Under Review' },
    { id: 'APP-10047', applicant: 'Global Tech LLC', documents: ['Corporate Charter', 'Tax ID', 'Director ID'], risk: 'High', date: '2023-10-24', status: 'Pending' },
    { id: 'APP-10048', applicant: 'David Miller', documents: ['National ID', 'Utility Bill'], risk: 'Low', date: '2023-10-23', status: 'Approved' },
    { id: 'APP-10049', applicant: 'Anonymous Shell Inc', documents: ['Tax ID'], risk: 'High', date: '2023-10-22', status: 'Rejected' },
  ]);

  return (
    <div className="kyc-page">
      <div className="page-header">
        <h1 className="page-title">KYC & Compliance Monitoring</h1>
        <p className="page-subtitle">Review customer applications and verify identity documents</p>
      </div>

      <KYCRecords records={records} />
    </div>
  );
}