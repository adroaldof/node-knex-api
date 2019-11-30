import expressRateLimit from 'express-rate-limit';

export const rateLimit = expressRateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'too many requests',
});
