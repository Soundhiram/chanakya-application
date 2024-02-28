import { RequestHandler } from 'express';
import Leader from './leaders-models';

export const getAllLeaders: RequestHandler = async (req, res) => {
  try {
    const leaders = await Leader.find({ archived: false });
    res.json(leaders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLeader: RequestHandler = async (req, res) => {
  const leader = new Leader(req.body);
  try {
    const newLeader = await leader.save();
    res.status(201).json(newLeader);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLeaderById: RequestHandler = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);
    if (!leader) {
      return res.status(404).json({ message: 'Leader not found' });
    }
    res.json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
