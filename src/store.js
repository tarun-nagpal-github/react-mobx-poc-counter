// store.js
import {observable, decorate} from 'mobx';

class CounterStore {
   counter = 0;

  increment() { this.counter++; }

  decrement() { this.counter--; }
}

decorate(CounterStore, {
    counter: observable,
})

export default new CounterStore();