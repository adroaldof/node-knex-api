import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { morganFormat } from '../config';
import router from '../modules/router';

const app: Application = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

app.use(
  morgan(morganFormat, {
    skip: (_: Request, res: Response) => res.statusCode < 400,
    stream: process.stderr,
  }),
);

app.use(
  morgan(morganFormat, {
    skip: (_: Request, res: Response) => res.statusCode >= 400,
    stream: process.stdout,
  }),
);

app.use('/', router);

export { app };
