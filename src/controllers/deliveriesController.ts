import deliveryModel, { DeliveriesInterface } from '../schema/deliverySchema';

export class DeliveriesServices {
  /**
   * GET all deliveries for carrier ✅
   */
  public getAllCarrierDeliveries<DeliveriesInterface>(carrierId: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.find(
        { carrierId: carrierId },
        (err: Error, deliveries: DeliveriesInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(deliveries);
          }
        }
      );
    });
  }

  /**
   * GET one delivery for carrier ✅
   */
  public getOneCarrierDelivery<DeliveriesInterface>(id: any, carrierId: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.findOne(
        { _id: id, carrierId: carrierId },
        (err: Error, deliveries: DeliveriesInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(deliveries);
          }
        }
      );
    });
  }

  /**
   * GET all deliveries for user ✅
   */
  public getAllClientDeliveries<DeliveriesInterface>(clientId: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.find(
        { clientId: clientId },
        (err: Error, deliveries: DeliveriesInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(deliveries);
          }
        }
      );
    });
  }

  /**
   * GET one delivery for user ✅
   */
  public getOneClientDelivery<DeliveriesInterface>(id: any, clientId: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.findOne(
        { _id: id, clientId: clientId },
        (err: Error, deliveries: DeliveriesInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(deliveries);
          }
        }
      );
    });
  }

  /**
   * CREATE a new delivery ✅
   */
  public createNewDelivery<DeliveriesInterface>(body: any) {
    const newDelivery = new deliveryModel({
      carrierId: body.carrierId,
      clientId: body.clientId,
      restId: body.restId,
      deliveryDone: body.deliveryDone,
    });

    return new Promise<DeliveriesInterface>((resolve, reject) => {
      newDelivery.save((err, delivery: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(delivery);
        }
      });
    });
  }

  /**
   * DELETE one delivery ✅
   */
  public deleteOneDelivery<DeliveriesInterface>(id: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.findByIdAndDelete(
        id,
        { strict: false },
        (err: any, delivery: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(delivery);
          }
        }
      );
    });
  }
}
