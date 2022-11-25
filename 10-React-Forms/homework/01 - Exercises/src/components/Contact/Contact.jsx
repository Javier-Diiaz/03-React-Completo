import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  return (
    <div>
      <div>Crear Formulario</div>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" name='name' placeholder="javier santiago diaz arcila" />
        <label htmlFor="">'Correo Electrónico:'</label>
        <input type="text" name='email' />
      </form>
    </div>
  )
}
