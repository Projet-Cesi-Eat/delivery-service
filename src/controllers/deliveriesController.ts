import deliveryModel, { DeliveriesInterface } from '../schema/deliverySchema';

export class DeliveriesServices {
  /**
   * GET all deliveries ✅
   */
  public getAllDeliveries<DeliveriesInterface>() {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.find((err: Error, deliveries: DeliveriesInterface) => {
        if (err) {
          reject(err);
        } else {
          resolve(deliveries);
        }
      });
    });
  }

  /**
   * GET one delivery ✅
   */
  public getOneDelivery<DeliveriesInterface>(id: any) {
    return new Promise<DeliveriesInterface>((resolve, reject) => {
      deliveryModel.findById(
        id,
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
   * DELETE one delivery
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
