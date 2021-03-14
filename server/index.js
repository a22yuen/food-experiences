import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true })) // limit picture size when uploaded
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors()); //cors must be before routes

app.get('/', (req, res) => {
  res.send("This is the Food blog API!");
})

//starts the paths with /posts, meaning everything in postRoutes starts at localhost:5000/posts/
app.use('/posts', postRoutes);

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);