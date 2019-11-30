import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { morganFormat } from '../config';
import { rateLimit } from './middlewares';

const app: Application = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(
  morgan(morganFormat, {
    skip: (_, res) => res.statusCode < 400,
    stream: process.stderr,
  }),
);

app.use(
  morgan(morganFormat, {
    skip: (_, res) => res.statusCode >= 400,
    stream: process.stdout,
  }),
);

app.get('/', rateLimit, (req: Request, res: Response) => {
  const { connection, socket } = req;
  const ip = connection.remoteAddress || socket.remoteAddress;

  return res.send({ ok: true, fromIp: ip });
});

export { app };
