import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import config from 'config'; 
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import gameRoutes from './routes/game.js';
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/game', gameRoutes);

const PORT = process.env.PORT || 6000;
mongoose.connect(config.get("mongoURI"), { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  }))
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify', false);
