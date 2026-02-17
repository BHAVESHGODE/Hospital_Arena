import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import rateLimit from 'express-rate-limit';
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean'); // Kept for type safety but disabled in usage
const hpp = require('hpp');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust Proxy (Required for Render/Heroku/Vercel)
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Security Headers & Sanitization
// Security Headers & Sanitization
// app.use(xss()); // Disabled due to conflict with newer Express/Node versions
app.use(hpp());


// Database Connection
const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        if (!MONGO_URI) {
            throw new Error('No MONGO_URI provided, falling back to In-Memory DB');
        }
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB Connected (Standard)');
    } catch (err) {
        console.warn('⚠️ Standard MongoDB Connection Failed. Starting In-Memory Database...');

        try {
            const { MongoMemoryServer } = require('mongodb-memory-server');
            const mongod = await MongoMemoryServer.create();
            const uri = mongod.getUri();
            await mongoose.connect(uri);
            console.log('✅ MongoDB Connected (In-Memory Fallback - Data will not persist)');
        } catch (memoryErr) {
            console.error('❌ In-Memory DB Error:', memoryErr);
            process.exit(1);
        }
    }
};

connectDB();

// Routes
import authRoutes from './routes/authRoutes';

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hospital Management System API is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
