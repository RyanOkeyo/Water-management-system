const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Example endpoint
app.get('/api/reports', (req, res) => {
  // Fetch data and send response
  res.json([{ _id: '1', title: 'Report 1' }, { _id: '2', title: 'Report 2' }]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
