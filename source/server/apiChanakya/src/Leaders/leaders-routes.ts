import express from 'express';
import {
  getAllLeaders,
  createLeader,
  getLeaderById,
} from './leaders-controller';

const leaderRouter = express.Router();

leaderRouter.get('/', getAllLeaders);

leaderRouter.post('/create', createLeader);

leaderRouter.get('/:id', getLeaderById);

export default leaderRouter;
