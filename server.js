import express from "express";
import emailRouter from './src/routes/emailRouter.js';
import config from './src/config/config.js';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', emailRouter);

const PORT  = config.PORT;

app.listen(PORT, () => console.log(`Server UP ON PORT ${PORT}`));