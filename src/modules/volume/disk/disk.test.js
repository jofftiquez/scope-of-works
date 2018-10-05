import { diskVol } from './disk';

describe('volume - disk', () => {
  test('19 and 25 arguments should return 7084.625', () => {
    const x = diskVol(19, 25);
    expect(x).toBe(7084.625);
  });

  test('[] and 25 arguments should return null', () => {
    const x = diskVol([], 25);
    expect(x).toBe(null);
  });

  test('{} and 25 arguments should return null', () => {
    const x = diskVol({}, 25);
    expect(x).toBe(null);
  });

  test(`'10' and 25 arguments should return null`, () => {
    const x = diskVol([], 25);
    expect(x).toBe(null);
  });

  test('0 and 10 arguments should return null', () => {
    const x = diskVol(0, 10);
    expect(x).toBe(null);
  });

  test('10 and 0 arguments should return null', () => {
    const x = diskVol(10, 0);
    expect(x).toBe(null);
  });

  test('-1 and 10 arguments should return null', () => {
    const x = diskVol(-1, 10);
    expect(x).toBe(null);
  });
  
  test('10 and -1 arguments should return null', () => {
    const x = diskVol(10, -1);
    expect(x).toBe(null);
  });



});