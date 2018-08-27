import {Observable} from './Observable';

describe('Observable Class', () => {
  test('Expect to call callback on change any object property', () => {
    const callback = jest.fn();
    const data = new Observable(['123', '2'], callback);

    data.shift();

    expect(callback).toBeCalled();
  });

  test('Expect to call callback even on nested object properties', () => {
    const callback = jest.fn();
    const data = new Observable({nested: ['123', '2']}, callback);

    data.nested.shift();

    expect(callback).toBeCalled();
  });
});
