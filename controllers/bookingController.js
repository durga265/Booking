
import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const { activityId } = req.body;
    const booking = await Booking.create({
      user: req.user.id,
      activity: activityId,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
