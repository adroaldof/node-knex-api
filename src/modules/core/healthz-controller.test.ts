import request, { Response } from 'supertest';
import { app } from '../../express/server';

describe('heathz controller', () => {
  it('should get /healthz', async () => {
    const { body }: Response = await request(app).get('/healthz');
    expect(Object.keys(body)).toEqual(['greeting', 'now']);
  });
});
