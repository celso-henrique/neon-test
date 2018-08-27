import njkMock from '../../helpers/njkMock/njkMock';
import {App} from './App';

describe('App Class', () => {
  test('Expect to render index.njk file on load', () => {
    new App();

    expect(njkMock.render).toBeCalled();
  });
});
