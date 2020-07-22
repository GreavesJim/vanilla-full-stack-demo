import Value from "./Models/Value.js";
import Car from "./Models/Car.js";

let _state = {
  activeValue: new Value({ title: "something" }),
  /** @type {Value[]} */
  values: [],
  cars: [],
};

let _subscribers = {
  cars: [],
};

//NOTE You should not need to change the code from this point down

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  subscribe(prop, fn) {
    _subscribers[prop].push(fn);
    console.log(_subscribers);
  }

  commit(prop, data) {
    _state[prop] = data;
    _subscribers[prop].forEach((fn) => fn());
    console.log(_state);
  }
}

const store = new Store();
export default store;
