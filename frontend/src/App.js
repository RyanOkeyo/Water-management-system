import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Meters from './components/Meters';
import Customers from './components/Customers';
import Payments from './components/Payments';
import Reports from './components/Reports';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data if logged in
    axios.get('http://localhost:3001/api/user') // Ensure the correct port is used
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav user={user} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/meters" element={<Meters />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
