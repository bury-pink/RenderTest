import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import mainRoutes from './routes/main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: ['https://rendertest-9wlt.onrender.com', 'http://localhost:8081', 'http://localhost:5000'] }));

app.use('/api', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})