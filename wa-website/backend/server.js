

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Move imports to the top

dotenv.config();

const app = express();

// 1. Middleware (MUST come before routes)
app.use(express.json()); 
app.use(cors()); 

// 2. Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("WA Backend API is running...");
});

// 3. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to WA Database"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));