import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login based on role. In a real app, you'd send this to an API.
    console.log('Logging in with:', { email, password, role });

    // Redirect simple logic, passing the selected role in the route state
    if (role === 'employee') {
      navigate('/dashboard', { state: { role: 'Employee' } });
    } else if (role === 'manager') {
      navigate('/dashboard', { state: { role: 'Manager' } });
    } else if (role === 'admin') {
      navigate('/dashboard', { state: { role: 'Admin' } });
    } else if (role === 'auditor') {
      navigate('/dashboard', { state: { role: 'Auditor' } });
    } else {
      navigate('/dashboard', { state: { role: 'Employee' } });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access the system</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
              <option value="auditor">Auditor</option>
            </select>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}