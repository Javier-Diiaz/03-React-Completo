import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');//estados

  function validateUser(value) {// funcion que valida
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  function submit(e) {//hecha por mi muestra en consola lo que se envia 
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <form onSubmit={submit}>
      <input className={error && 'danger'}
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => validateUser(e.target.value)} />
      {!error ? null : <span>{error}</span>}
      <input name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" />
    </form>
    //pregunta en className si hay algo en error entonces me muestra el estado danger que me retorna las cosa de color rojo y demas 
    //con onChange se toma el valor del evento y con el e.target.value le pasa a la funcion validadora lo que el usuario escribio para verificar que cumpla con las  validaciones
  );
}