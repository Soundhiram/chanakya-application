import mongoose, { Schema, Document } from 'mongoose';

export interface ChanakyaInterface extends Document {
  fullName: string;
  email: string;
  watsappNumber: number;
  organisation: string;
  designation: string;
  city: string;
  socialMedia: [];
  archived: boolean;
}

const ChanakyaSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  watsappNumber: { type: String, required: true, unique: true },
  organisation: { type: String, required: true },
  designation: { type: String, required: true },
  city: { type: String, required: true },
  socialMedia: { type: [], required: true },

  archived: { type: Boolean, default: false },
});

const Chanakya = mongoose.model<ChanakyaInterface>('Chanakya', ChanakyaSchema);

export default Chanakya;
