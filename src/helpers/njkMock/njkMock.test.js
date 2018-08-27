import njkMock from './njkMock';

describe('njkMock helper', () => {
  test('Expect to return a object with a render method', () => {
    expect(njkMock.render).not.toBeNull();
  });
});
