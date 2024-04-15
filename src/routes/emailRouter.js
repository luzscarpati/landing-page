import { Router } from "express";
import { sendMail } from '../controllers/sendMail.js';

const router = Router();

router.post('/submit-form', sendMail);

export default router;