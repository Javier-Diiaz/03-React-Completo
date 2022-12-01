//!                  REDUX 
//! STORE GLobal (se puede uno varios)
// 1)El store es donde se van a guardan todos los estados de mi app
// 2)permite el acceso al estado via getState(); ==> me lo puedo traer todo y mirar que tiene por dentro ese state.
// 3)permite que el estado se actualize mediante dispatch(action); ==> recordar que las action a mandar siempre son obj. 
// 4)registra los listeners via subscribe(listener); ==> Me suscribo desde mi componente a ese state y quedo esperando el cambio para midificarlo y que se renderice de nuevo.
// 5) me puedo des-suscribir desde el componente a ese state al que estaba conectado.



//! Codigo importate a ver en la libreta 
// 1) Reducers: como se crean los reducer; ==> Funciones creadoras de objetos
// 2) Store: como se declarar; ==> primera linea se importa el store y los reducer(las funciones creadoras de las action),3 linea se crea el store, forma correcta.

import { createStore } from 'redux' // se llama la store de redux

import todoApp from 'reducers' // se llaman los reducers

const store = createStore(todoApp) // se crea el state   con los reducer y los valores de reducers