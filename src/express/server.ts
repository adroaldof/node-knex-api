import express, { Request, Response } from 'express';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.get('/', (req: Request, res: Response) => {
  const { connection, socket } = req;
  const ip = connection.remoteAddress || socket.remoteAddress;

  return res.send({ ok: true, fromIp: ip });
});

export { app };
