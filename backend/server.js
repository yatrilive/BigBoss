require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Quote = require('./models/quotes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// POST endpoint for form submissions (singular)
app.post('/api/quote', async (req, res) => {
  try {
    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json({ message: 'Quote submitted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit quote', details: err });
  }
});

// POST endpoint for form submissions (plural, for frontend compatibility)
app.post('/api/quotes', async (req, res) => {
  try {
    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json({ message: 'Quote submitted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit quote', details: err });
  }
});

// (Optional) GET endpoint to view all submissions
app.get('/api/quote', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 