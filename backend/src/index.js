import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http:localhost:5173',
    credentials: true
}));
app.use('/api/auth', authRoute);
app.use('/api/message', messageRoutes);

app.listen(port, () => {
    console.log(`Server starting running at: http://localhost:${port}/`);
    connectDB();
});
