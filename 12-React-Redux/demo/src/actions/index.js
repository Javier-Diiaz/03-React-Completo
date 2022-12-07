import axios from 'axios';

export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
  return {
    type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

export function getPost() {
  return {
    type: 'GET_POST',
  }
}

export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
}

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(r => r.data)// me trae la data de la info que traje
      .then(d => dispatch(receivePost(d)))
      .catch(e => console.log(e));
  }
}

// axion creator asincrona. comienza desde la linea 32