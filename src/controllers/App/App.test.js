import njkMock from '../../helpers/njkMock/njkMock';
import {App} from './App';

describe('App Class', () => {
  test('Expect to render index.njk file on load', () => {
    new App();

    expect(njkMock.render).toBeCalled();
  });

  test('Expect to delete item when click on delete button', () => {
    const app = new App();

    const buttons = document.querySelectorAll('.carousel__deleteButton');
    const initialLength = app.data.statements[0].length;

    buttons[0].dispatchEvent(new Event('click'));

    expect(app.data.statements[0].length).toBe(initialLength - 1);
  });

  test('Expect to update balance when click on delete button', () => {
    const app = new App();

    const buttons = document.querySelectorAll('.carousel__deleteButton');
    const initialBalance = app.data.balance;

    buttons[0].dispatchEvent(new Event('click'));

    expect(app.data.balance).not.toBe(initialBalance);
  });
});
