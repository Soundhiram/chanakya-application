import mongoose, { Schema, Document } from 'mongoose';

export interface LeaderInterface extends Document {
  fullName: string;
  email: string;
  watsappNumber: number;
  organisation: string;
  designation: string;
  city: string;
  socialMedia: string;
  archived: boolean;
}

const LeaderSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  watsappNumber: { type: String, required: true, unique: true },
  organisation: { type: String, required: true },
  designation: { type: String, required: true },
  city: { type: String, required: true },
  socialMedia: { type: String, required: true },

  archived: { type: Boolean, default: false },
});

const Leader = mongoose.model<LeaderInterface>('Leader', LeaderSchema);

export default Leader;
