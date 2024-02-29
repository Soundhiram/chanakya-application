import express from 'express';
import {
  getAllSubscribers,
  createSubscriber,
} from './subscriber-controller';

const subscriberRouter = express.Router();

subscriberRouter.get('/', getAllSubscribers);

subscriberRouter.post('/create', createSubscriber);


export default subscriberRouter;
