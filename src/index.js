const express = require('express');
const helmet = require('helmet');
const connectDB = require('../config/database');
const profileRoutes = require('../routes/profileRoutes');

const app = express();

connectDB();

app.use(helmet());
app.use(express.json());

app.use('/api/profiles', profileRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Trading Hub Service!');
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Trading Hub Service is running on http://localhost:${PORT}`);
});
