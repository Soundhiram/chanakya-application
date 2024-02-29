import mongoose, { Schema, Document } from 'mongoose';

export interface SubscriberInterface extends Document {
  email: string;
  archived: boolean;
}

const SubscriberSchema: Schema = new Schema({
  email: { type: String, required: true,unique: true },
  archived: { type: Boolean, default: false },
});

const Subscriber = mongoose.model<SubscriberInterface>('Subscriber', SubscriberSchema);

export default Subscriber;
