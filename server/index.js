import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth , } from './controllers/health.js';
import{ postApiTransaction, getApiTransactions,postApiSignUp,postApiLogin } from './controllers/transaction.js'

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
        console.log('MongoDB connected');
    }
};
connectDB();

// Create health API to detect whether the server is live or not
// it shows this output when server is live = {"success":true,"message":"Server is running"}

app.get('/api/health', getApiHealth);

app.post('/api/transaction', postApiTransaction);

app.get('/api/transactions', getApiTransactions);

app.post('/api/signup',postApiSignUp);

app.post('/api/login',postApiLogin);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`server is running on port ${PORT}`)

});