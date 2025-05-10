
import Activity from '../models/Activity.js';

export const listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createActivity = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const activity = new Activity({
      title,
      description,
      location,
      dateTime: date,
    });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
