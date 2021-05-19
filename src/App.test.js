const formatingValue = require('./app');

test('testing the chronometer!', () => {
  expect(formatingValue(true,60,60,2)).toBe("02:00:00");
});