import mainTemplate from '../../views/index.njk';
import {account} from '../../models';
import {Carousel, Observable} from '../../utils';

export class App {
  constructor() {
    this.data = new Observable(account, this.onUpdate.bind(this));
    this.render();
    this.bind();
    this.carousel = new Carousel(document.querySelector('.carousel'));
  }

  onUpdate() {
    this.render();
    this.bind();
    this.carousel.update(document.querySelector('.carousel'));
  }

  render() {
    document.body.innerHTML = mainTemplate.render(this.data);
  }

  bind() {
    const slides = document.querySelectorAll('.carousel__slide');

    slides.forEach((slide, slideIndex) => {
      const buttons = slide.querySelectorAll('.carousel__deleteButton');

      buttons.forEach((button, buttonIndex) => {
        button.addEventListener('click', event => {
          this.data.statements[slideIndex].splice(buttonIndex, 1);
          this.updateBalance();

          event.preventDefault();
        });
      });
    });
  }

  updateBalance() {
    this.data.balance = this.data.statements.reduce(
      (balance, statement) =>
        balance +
        statement.reduce(
          (balance, item) =>
            item.category === 'Depósitos'
              ? balance + item.value
              : balance - item.value,
          0
        ),
      0
    );
  }
}
