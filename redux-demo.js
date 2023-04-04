const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// console.log(store.getState());

store.subscribe(counterSubscriber);
// This function will be executed by redux whenever the data in the store changes

store.dispatch({ type: "INCREMENT" });
// A dispatch is a function that will be executed by redux whenever an action is dispatched
// An action is a JavaScript Object that has a type property

// Dispatching an action will trigger the reducer function (counterReducer)
