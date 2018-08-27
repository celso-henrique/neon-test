import formatReal from './FormatReal';

describe('formatReal helper', () => {
  test('Expect to format int into Brazilian Real currency', () => {
    expect(formatReal(100000)).toBe('1.000,00');
  });
});
