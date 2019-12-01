import { Router, Response } from 'express';

import healthz from './core';

const router = Router();

router.use('/healthz', healthz);
router.get('/', (_, res: Response) => res.send({ ok: true }));

export default router;
