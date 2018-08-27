import {Carousel} from './Carousel';
import njkMock from '../../helpers/njkMock/njkMock';

describe('Carousel Class', () => {
  beforeEach(() => {
    document.body.innerHTML = njkMock.render();
  });

  test('Expect to change style properties correctly', () => {
    const wrapper = document.querySelector('.carousel');
    wrapper.style.setProperty = jest.fn();

    new Carousel(wrapper);

    expect(wrapper.style.setProperty).toBeCalledWith('--slides', 2);
    expect(wrapper.style.setProperty).toBeCalledWith('--activeSlide', 0);
  });

  test('Expect to change style propertie --activeSlide on bullet click', () => {
    const wrapper = document.querySelector('.carousel');
    const bullets = wrapper.querySelectorAll('.carousel__bullet');
    wrapper.style.setProperty = jest.fn();

    new Carousel(wrapper);
    bullets[1].dispatchEvent(new Event('click'));

    expect(wrapper.style.setProperty).toBeCalledWith('--activeSlide', 1);
  });
});
