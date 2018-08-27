export class Carousel {
  constructor(wrapper, initialSlide = 0) {
    this.update(wrapper, initialSlide);
  }

  update(wrapper, activeSlide = this.activeSlide) {
    this.wrapper = wrapper;
    this.slides = this.wrapper.querySelectorAll('.carousel__slide');
    this.bullets = this.wrapper.querySelectorAll('.carousel__bullet');
    this.content = this.wrapper.querySelector('.carousel__content');
    this.activeSlide = activeSlide;

    this.bind();
    this.changeActiveSlide(this.activeSlide, true);
  }

  bind() {
    this.bullets.forEach((bullet, bulletIndex) => {
      bullet.addEventListener('click', event => {
        this.changeActiveSlide(bulletIndex);
        event.preventDefault();
      });
    });

    this.content.addEventListener(
      'touchstart',
      this.handleTouchStart.bind(this)
    );
    this.content.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].screenX;
  }

  handleTouchEnd(event) {
    if (
      event.changedTouches[0].screenX < this.touchStartX &&
      this.activeSlide < this.slides.length - 1
    ) {
      this.changeActiveSlide(this.activeSlide + 1);
    } else if (
      event.changedTouches[0].screenX > this.touchStartX &&
      this.activeSlide > 0
    ) {
      this.changeActiveSlide(this.activeSlide - 1);
    }
  }

  toggleModifiers(elements, className, modifier) {
    elements.forEach((element, elementIndex) => {
      element.className =
        this.activeSlide === elementIndex
          ? `${className}-${modifier}`
          : className;
    });
  }

  changeActiveSlide(index, noTransition = false) {
    clearTimeout(this.timeout);

    if (!noTransition) {
      this.content.className = 'carousel__content-transition';

      this.timeout = setTimeout(() => {
        this.content.className = 'carousel__content';
      }, 1000);
    }

    this.activeSlide = index;
    this.toggleModifiers(this.slides, 'carousel__slide', 'active');
    this.toggleModifiers(this.bullets, 'carousel__bullet', 'active');
    this.wrapper.style.setProperty('--slides', this.slides.length);
    this.wrapper.style.setProperty('--activeSlide', index);
  }
}
