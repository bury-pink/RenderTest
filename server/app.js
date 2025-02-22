import express from 'express';
import dotenv from 'dotenv';

import mainRoutes from './routes/main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})