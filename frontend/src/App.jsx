import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employees/Employees";
import FraudAlerts from "./pages/FraudAlerts/FraudAlerts";
import KYC from "./pages/KYC/KYC";
import Reports from "./pages/Reports/Reports";
import EmployeeMonitor from "./pages/Employees/EmployeeMonitor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/fraud-alerts" element={<FraudAlerts />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/monitor" element={<EmployeeMonitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;