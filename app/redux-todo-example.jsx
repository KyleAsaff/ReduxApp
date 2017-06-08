var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = { 
  name: 'Anonymous', 
  searchText: '', 
  showCompleted: false, 
  toDo: [] 
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// subscribe to changes

store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
};

store.dispatch(action);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'd'
};

store.dispatch(action);

console.log('type', store.getState());