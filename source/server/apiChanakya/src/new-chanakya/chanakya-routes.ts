import express from 'express';
import {
  getAllChanakyas,
  createChanakya,
  getChanakyaById,
} from './chanakya-controller';

const chanakyaRouter = express.Router();

chanakyaRouter.get('/', getAllChanakyas);

chanakyaRouter.post('/create', createChanakya);

chanakyaRouter.get('/:id', getChanakyaById);

export default chanakyaRouter;
