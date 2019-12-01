import request, { Response } from 'supertest';
import { app } from '../express/server';

describe('router', () => {
  it('should get /', async () => {
    const { body }: Response = await request(app).get('/');
    expect(Object.keys(body)).toEqual(['ok']);
  });
});
