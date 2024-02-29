import { RequestHandler } from 'express';
import Subscriber from './subscriber-model';

export const getAllSubscribers: RequestHandler = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({ archived: false });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSubscriber: RequestHandler = async (req, res) => {
  const subscriber = new Subscriber(req.body);
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
