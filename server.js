import express from "express";
import emailRouter from './src/routes/emailRouter.js';
import config from './src/config/config.js';
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use('/api', emailRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = config.PORT;

app.listen(PORT, () => console.log(`Server UP ON PORT ${PORT}`));
