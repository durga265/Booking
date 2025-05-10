// routes/bookingRoutes.js
import express from 'express';
import { createBooking, listBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, listBookings); 

export default router;
