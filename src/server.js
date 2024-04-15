import express from "express";
import emailRouter from '../routes/emailRouter.js';
import config from './config/config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', emailRouter);

const PORT  = config.PORT;

app.listen(PORT, () => console.log(`Server UP ON PORT ${PORT}`));