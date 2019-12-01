import { healthZ, IhealthZReturn } from './healthz-service';

describe('health service', () => {
  it('should return correct keys', () => {
    const body: IhealthZReturn = healthZ();
    expect(Object.keys(body)).toEqual(['greeting', 'now']);
  });

  it('should greeting return good evening', () => {
    // moment uses js Date internally
    const timestamp = new Date(2019, 0, 1, 19, 1, 1); // 2019-01-01T19:01:01.000Z
    const dateNow = jest.spyOn(Date, 'now').mockImplementationOnce(() => timestamp.getTime());

    const { greeting, now }: IhealthZReturn = healthZ();

    expect(now).toContain('19:01:01');
    expect(greeting).toBe('good evening');
    dateNow.mockRestore();
  });

  it('should greeting return good afternoon', () => {
    const timestamp = new Date(2019, 0, 1, 14, 1, 1); // 2019-01-01T14:01:01.000Z
    const dateNow = jest.spyOn(Date, 'now').mockImplementationOnce(() => timestamp.getTime());

    const { greeting, now }: IhealthZReturn = healthZ();

    expect(now).toContain('14:01:01');
    expect(greeting).toBe('good afternoon');
    dateNow.mockRestore();
  });

  it('should greeting return good morning', () => {
    const timestamp = new Date(2019, 0, 1, 0, 1, 1); // 2019-01-01T00:01:01.000Z
    const dateNow = jest.spyOn(Date, 'now').mockImplementationOnce(() => timestamp.getTime());

    const { greeting, now }: IhealthZReturn = healthZ();

    expect(now).toContain('00:01:01');
    expect(greeting).toBe('good morning');
    dateNow.mockRestore();
  });
});
