//imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import carRoutes from './routes/carRoutes.mjs'
//setups
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(express.json());
connectDB()

//routes
app.use('/api/car', carRoutes)

//err  handling middlewares
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
  });

//listeners
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
  });