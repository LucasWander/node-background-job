import 'dotenv/config';
import express from 'express';

import {adaptExpress} from './main/adaptExpress';
import saveUserController from './main/factory';

const app = express();

app.use(express.json());

app.post('/user', adaptExpress(saveUserController));

app.listen(process.env.PORT, () => {
  console.log(`Listen on http://localhost:${process.env.PORT}`);
});
