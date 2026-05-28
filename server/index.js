import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';                          
import { fileURLToPath } from 'url';              
dotenv.config();

import { getApiHealth } from './controllers/health.js';
import { postApiTransaction, getApiTransactions, postApiSignUp, postApiLogin } from './controllers/transaction.js'

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);         

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
        console.log('MongoDB connected');
    }
};
connectDB();

// ─── API Routes ──────────────────────
app.get('/api/health', getApiHealth);
app.post('/api/transaction', postApiTransaction);
app.get('/api/transactions', getApiTransactions);
app.post('/api/signup', postApiSignUp);
app.post('/api/login', postApiLogin);

// ─── Serve React Frontend ─────────────────  
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// ─── Start Server ─────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});