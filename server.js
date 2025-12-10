const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from 'out' directory (Next.js static export)
app.use(express.static(path.join(__dirname, 'out'), {
  maxAge: '1y',
  etag: true
}));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Brooks Built Marketing website running on port ${PORT}`);
});
