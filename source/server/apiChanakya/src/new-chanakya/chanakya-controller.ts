import { RequestHandler } from 'express';
import Chanakya from './chanakya-model';

export const getAllChanakyas: RequestHandler = async (req, res) => {
  try {
    const chanakyas = await Chanakya.find({ archived: false });
    res.json(chanakyas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChanakya: RequestHandler = async (req, res) => {
  const chanakya = new Chanakya(req.body);
  try {
    const newChanakya = await chanakya.save();
    res.status(201).json(newChanakya);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChanakyaById: RequestHandler = async (req, res) => {
  try {
    const chanakya = await Chanakya.findById(req.params.id);
    if (!chanakya) {
      return res.status(404).json({ message: 'Chanakya not found' });
    }
    res.json(chanakya);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
