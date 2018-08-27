import mainTemplate from '../../views/index.njk';
import {account} from '../../models';

export class App {
  constructor() {
    this.load();
  }

  load() {
    document.body.innerHTML = mainTemplate.render(account);
  }
}
