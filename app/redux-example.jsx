var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Kyle'
};

store.dispatch(action);

var action = {
  type: 'CHANGE_NAME',
  name: 'john'
};

store.dispatch(action);

console.log('name', store.getState());