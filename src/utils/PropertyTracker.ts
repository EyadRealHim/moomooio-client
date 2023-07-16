export default class PropertyTracker<T> {
  constructor(protected content: T, protected register: T | undefined = undefined) {}

  set(content: T) {
    this.register = this.content;
    this.content = content;
  }

  isDiff() {
    return this.register !== this.content;
  }

  get current(): T {
    return this.content;
  }

  get previous() {
    return this.register;
  }
}
