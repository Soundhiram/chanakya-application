/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import chanakyaRouter from './new-chanakya/chanakya-routes';
import leaderRouter from './Leaders/leaders-routes';
import authRoutes from './auth-user/authUser.routes';
import subscriberRouter from './subscriber/subscriber-routes';

mongoose.connect(
  'mongodb+srv://jamster:Soundar@jamsterapp.cuxjnde.mongodb.net/young-chanakya'
);

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', authRoutes);
app.use('/api/chanakya', chanakyaRouter);
app.use('/api/leader', leaderRouter);
app.use('/api/subscriber', subscriberRouter);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to apiChanakya!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
