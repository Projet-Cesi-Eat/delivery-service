import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { DeliveriesServices } from '../controllers/deliveriesController';

const router = express.Router();
const services = new DeliveriesServices();

/**
 * GET all delivery ✅
 */
router.get('/all/', function (req: Request, res: Response) {
  services
    .getAllDeliveries()
    .then((deliveries) => res.status(200).json({ deliveries }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * GET one delivery ✅
 */
router.get('/one/', (req: Request, res: Response) => {
  const id = req.query.id;
  services
    .getOneDelivery(id)
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
