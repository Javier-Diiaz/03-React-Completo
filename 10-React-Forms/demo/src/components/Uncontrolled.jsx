import React from 'react';

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault(); // el prevent evita que se refresque toda la pagina en todas las evento tiene que estar esto ojo 
    const username = document.querySelector('input[name=username]').value;// aca va a buscar al dom / lo de la teoria los no controlados extraen info directamente del Domm
    const password = document.querySelector('input[name=password]').value;
    console.log(username, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
      //el form tiene una propiedad onSubmit que lo que hace esque me permite 
    );
  }
}

export default Uncontrolled;