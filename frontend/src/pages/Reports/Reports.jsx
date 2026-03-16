import React from "react";
import "./reports.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const fraudData = [
  { month: "Jan", fraud: 10 },
  { month: "Feb", fraud: 14 },
  { month: "Mar", fraud: 8 },
  { month: "Apr", fraud: 20 },
  { month: "May", fraud: 16 },
  { month: "Jun", fraud: 25 }
];

const Reports = () => {

  const downloadCSV = () => {
    const data = [
      ["Transaction ID", "User", "Amount", "Status"],
      ["TX1023", "John Doe", "$5000", "Flagged"],
      ["TX1045", "Priya Sharma", "$7500", "Under Review"],
      ["TX1099", "Rahul Kumar", "$12000", "Fraud Detected"]
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map(row => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fraud_report.csv");

    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="reports-container">

      <div className="reports-header">
        <h1>Fraud Monitoring Reports</h1>
      </div>

      {/* Statistics Cards */}
      <div className="cards-container">

        <div className="report-card">
          <h3>Total Transactions</h3>
          <p>12,540</p>
        </div>

        <div className="report-card">
          <h3>Suspicious Transactions</h3>
          <p>320</p>
        </div>

        <div className="report-card">
          <h3>Fraud Cases</h3>
          <p>78</p>
        </div>

        <div className="report-card">
          <h3>KYC Verified</h3>
          <p>95%</p>
        </div>

      </div>

      {/* Fraud Trend Chart */}
      <div className="chart-section">
        <h2>Fraud Trend (Monthly)</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={fraudData}>

            <CartesianGrid stroke="#555" strokeDasharray="3 3" />

            <XAxis dataKey="month" stroke="#ffffff" />

            <YAxis stroke="#ffffff" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "10px",
                color: "white"
              }}
              labelStyle={{ color: "#4fd1c5" }}
            />

            <Line
              type="monotone"
              dataKey="fraud"
              stroke="#4fd1c5"
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Suspicious Transactions Table */}
      <div className="table-section">

  <div className="table-header">
    <h2>Suspicious Transactions</h2>

    <button className="download-btn" onClick={downloadCSV}>
      ⬇ Download CSV
    </button>
  </div>

  <table className="reports-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TX1023</td>
              <td>John Doe</td>
              <td>$5000</td>
              <td><span className="risk-medium">Flagged</span></td>
            </tr>

            <tr>
              <td>TX1045</td>
              <td>Priya Sharma</td>
              <td>$7500</td>
              <td><span className="risk-low">Under Review</span></td>
            </tr>

            <tr>
              <td>TX1099</td>
              <td>Rahul Kumar</td>
              <td>$12000</td>
              <td><span className="risk-high">Fraud Detected</span></td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Reports;