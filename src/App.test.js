const chronometerStart = require('./app');

test('testing the chronometer!', () => {
  expect(chronometerStart(true,60,60,2)).toBe(7200);
});