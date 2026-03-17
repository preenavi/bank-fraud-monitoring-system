import React from 'react';
import './TransactionTable.css';

const MOCK_TRANSACTIONS = [
  { id: 'TX-9921', date: '2023-10-27 10:45 AM', account: '4829-****-1102', amount: '$1,250.00', handledBy: 'Johh Doe', status: 'Success' },
  { id: 'TX-9922', date: '2023-10-27 11:02 AM', account: '2190-****-8831', amount: '$50.00', handledBy: 'Johh Doe', status: 'Pending' },
  { id: 'TX-9988', date: '2023-10-26 14:20 PM', account: '5541-****-9820', amount: '$9,800.00', handledBy: 'Jane Smith', status: 'Failed' },
  { id: 'TX-9989', date: '2023-10-26 15:10 PM', account: '1120-****-4455', amount: '$310.00', handledBy: 'Auto-System', status: 'Success' },
];

export default function TransactionTable() {
  return (
    <div className="transaction-table-container">
      <h3>Transaction History</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Tx ID</th>
              <th>Date & Time</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Handled By</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRANSACTIONS.map(tx => (
              <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.account}</td>
                <td className="amount">{tx.amount}</td>
                <td>{tx.handledBy}</td>
                <td>
                  <span className={`tx-status ${tx.status.toLowerCase()}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
