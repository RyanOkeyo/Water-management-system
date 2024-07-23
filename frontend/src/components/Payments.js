import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('/api/payments').then(response => setPayments(response.data));
  }, []);

  return (
    <div className="payments">
      <h1 className="text-center">Payments</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Meter</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment._id}>
              <td>${payment.amount}</td>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
              <td>{payment.customer.name}</td>
              <td>{payment.meter.identifier}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Payments;
