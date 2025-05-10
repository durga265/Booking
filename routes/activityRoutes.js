
import express from 'express';
import { listActivities, createActivity } from '../controllers/activityController.js';

const router = express.Router();

router.get('/', listActivities);
router.post('/', createActivity); 

export default router;
