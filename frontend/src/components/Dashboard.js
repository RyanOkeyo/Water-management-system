import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import './Dashboard.css'; // Create this file for custom styling

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch dashboard data
    axios.get('/api/reports').then(response => setData(response.data));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="text-center">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="text-white bg-primary mb-3">
            <Card.Body>
              <Card.Title>Water Usage</Card.Title>
              <Card.Text>{data.waterUsage || 'Loading...'}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-success mb-3">
            <Card.Body>
              <Card.Title>Total Payments</Card.Title>
              <Card.Text>${data.totalPayments || 'Loading...'}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white bg-danger mb-3">
            <Card.Body>
              <Card.Title>Alerts</Card.Title>
              <Card.Text>{data.alerts || 'Loading...'}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
