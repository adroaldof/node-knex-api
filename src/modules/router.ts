import { Router, Response } from 'express';

import healthz from './core';

const router = Router();

router.use('/healthz', healthz);

// Default routes
router.get('/', (_, res: Response) => res.send({ ok: true }));
router.get('*', (_, res: Response) => res.status(404).send({ key: 'not-found', message: 'not found' }));

export default router;
