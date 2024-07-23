import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/meters">Meters</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        {user ? (
          <li><button onClick={() => localStorage.removeItem('token')}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
