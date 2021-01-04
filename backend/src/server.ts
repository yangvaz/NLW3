import express from 'express';
import path from 'path';
import  cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);	 // precisa vir após o express.json()
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);   // definindo porta do localhost:3333

// knex('users').select('*').where('name', 'Yan')
// = SELECT * FROM USERS where NAME = YAN

