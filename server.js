const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/testimonials', (req, res) => res.sendFile(path.join(__dirname, 'public', 'testimonials.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/social-media-growth', (req, res) => res.sendFile(path.join(__dirname, 'public', 'social-media-growth.html')));
app.get('/meta-ads', (req, res) => res.sendFile(path.join(__dirname, 'public', 'meta-ads.html')));
app.get('/content-strategy', (req, res) => res.sendFile(path.join(__dirname, 'public', 'content-strategy.html')));

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://0.0.0.0:${PORT}`));