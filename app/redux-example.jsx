var redux = require('redux');

console.log('Starting redux example');

// Pure Function
function add(a, b) {
  return a + b;
}

var a = 3;
function add(b) {
  return a + b;
}

var result;
function add (a, b) {
  result = a+b;
  return result;
}

function add(a, b) {
  return a + b + new Date().getSeconds();
}

function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
}

var res = changeProp({
  name: 'Kyle',
  age: 25
});

console.log(res);