const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ✅ Load .env just once
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
const corsOptions = {
  origin: ['http://fnpglobal.com', 'https://fnpglobal.com'],
  methods: ['POST'],
};

app.use(cors(corsOptions));



app.use(express.json());

// Routes
app.use('/api/form', formRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

