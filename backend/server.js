const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ✅ Load .env just once
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/form', formRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
