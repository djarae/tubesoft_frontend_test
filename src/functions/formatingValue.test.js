import { formatingValue } from './formatingValue';

test('testing the chronometer!', () => {
  expect(formatingValue(true,0,0,2)).toBe("02:00:00");
});