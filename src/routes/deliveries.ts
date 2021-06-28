import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { DeliveriesServices } from '../controllers/deliveriesController';

const router = express.Router();
const services = new DeliveriesServices();

/**
 * GET all delivery for carrier ✅
 */
router.get('/carrierAll/', function (req: Request, res: Response) {
  const carrierId = req.query.carrierId;
  services
    .getAllCarrierDeliveries(carrierId)
    .then((deliveries) => res.status(200).json({ deliveries }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * GET one delivery for carrier ✅
 */
router.get('/carrierOne/', (req: Request, res: Response) => {
  const id = req.query.id;
  const carrierId = req.query.carrierId;
  services
    .getOneCarrierDelivery(id, carrierId)
    .then((delivery) => res.status(200).json({ delivery: delivery }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * GET all delivery for user ✅
 */
router.get('/clientAll/', function (req: Request, res: Response) {
  const clientId = req.query.clientId;
  services
    .getAllClientDeliveries(clientId)
    .then((deliveries) => res.status(200).json({ deliveries }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * GET one delivery for user ✅
 */
router.get('/clientOne/', (req: Request, res: Response) => {
  const id = req.query.id;
  const clientId = req.query.clientId;
  services
    .getOneClientDelivery(id, clientId)
    .then((delivery) => res.status(200).json({ delivery: delivery }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Create new delivery ✅
 */
router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  services
    .createNewDelivery(req.body)
    .then((delivery) => res.status(201).json({ delivery }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Delete one delivery ✅
 */
router.delete('/', function (req: Request, res: Response, next: NextFunction) {
  const id = req.query.id;
  services
    .deleteOneDelivery(id)
    .then(() => res.status(201).json('Delivery has been deleted'))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
