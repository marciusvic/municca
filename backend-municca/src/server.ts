import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import documentRoutes from './routes/documentRoutes';
import router from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas para User e Document
app.use('/auth', router);
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
