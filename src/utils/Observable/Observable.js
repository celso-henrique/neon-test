export class Observable {
  constructor(data, onUpdate) {
    this.onUpdate = onUpdate;

    return new Proxy(data, {
      get: this.handleDataGet.bind(this),
      set: this.handleDataSet.bind(this)
    });
  }

  handleDataGet(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);

    if (typeof value === 'object') {
      return new Proxy(value, {
        get: this.handleDataGet.bind(this),
        set: this.handleDataSet.bind(this)
      });
    }

    return value;
  }

  handleDataSet(data, prop, value) {
    const hasSet = Reflect.set(data, prop, value);

    if (typeof this.onUpdate === 'function') {
      this.onUpdate();
    }

    return hasSet;
  }
}
