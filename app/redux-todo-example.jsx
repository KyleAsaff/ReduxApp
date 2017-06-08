var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = { 
  name: 'Anonymous', 
  searchText: '', 
  showCompleted: false, 
  toDo: [] 
};

var reducer = (state = stateDefault, action) => {
  return state;
  
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);