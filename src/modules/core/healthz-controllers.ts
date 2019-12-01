import { Request, Response, Router } from 'express';

import { healthZ } from './healthz-service';

const router = Router();

router.get('/', async (_: Request, res: Response) => {
  const response = healthZ();

  return res.send(response);
});

export default router;
