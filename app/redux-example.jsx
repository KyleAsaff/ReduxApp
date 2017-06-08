var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies, {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'ADD_MOVIE':
    return {
      ...state,
      movies: [
        ...state.movies, {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
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
  
  console.log('new state', store.getState());
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
  type: 'ADD_HOBBY',
  hobby: 'running'
};

store.dispatch(action);

var action = {
  type: 'ADD_MOVIE',
  title: 'mad max',
  genre: 'action'
};

store.dispatch(action);

console.log('name', store.getState());