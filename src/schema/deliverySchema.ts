import { Schema, model, Number } from 'mongoose';

export interface DeliveriesInterface {
  _id: String;
  carrierId: Number;
  clientId: Number;
  restId: String;
  deliveryDone: Boolean;
  deliveryTime: Date;
}

const deliveriesSchema = new Schema<DeliveriesInterface>(
  {
    carrierId: { type: Number, required: true },
    clientId: { type: Number, required: true },
    restId: { type: String, required: true },
    deliveryDone: { type: Boolean, required: true },
  },
  { timestamps: { createdAt: 'deliveryTime', updatedAt: false } }
);

export default model<DeliveriesInterface>('deliveries', deliveriesSchema);
