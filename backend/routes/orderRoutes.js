import express from 'express';
const router = express.Router();
// import { addOrderItems } from '../controllers/orderController.js';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router;
