import express, { Request, Response } from 'express';

import { host, port } from './config';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.get('/', (req: Request, res: Response) => {
  const { connection, socket } = req;
  const ip = connection.remoteAddress || socket.remoteAddress;

  return res.send({ ok: true, fromIp: ip });
});

app.listen(port, () => console.info(`Server started at ${host}:${port}`));
