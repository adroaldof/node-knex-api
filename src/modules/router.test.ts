import request, { Response } from 'supertest';
import { app } from '../express/server';

describe('router', () => {
  it('should get /', async () => {
    const { body }: Response = await request(app).get('/');
    expect(Object.keys(body)).toEqual(['ok']);
  });

  it('should get /unknown', async () => {
    const { body, status }: Response = await request(app).get('/unknown');
    expect(status).toEqual(404);
    expect(Object.keys(body)).toEqual(['key', 'message']);
  });
});
