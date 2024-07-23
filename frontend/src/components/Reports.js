import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      {reports.length > 0 ? (
        <ul>
          {reports.map(report => (
            <li key={report._id}>{report.title}</li>
          ))}
        </ul>
      ) : (
        <p>No reports available.</p>
      )}
    </div>
  );
}

export default Reports;
