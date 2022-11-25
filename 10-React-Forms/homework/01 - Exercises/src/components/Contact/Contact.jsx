import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (evento) => {
    // e = { target: { value:"hola", name:"email" } }
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
    })
    setErrors(validate({
      ...inputs,
      [evento.target.name]: evento.target.value,
    }))
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (Object.keys(errors).length === 0) {
      window.alert('Datos completos')
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: ""
      })
      // setErrors({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   subject: "",
      //   message: ""
      // })
    }
    else {
      alert("Debes corregir los errores")
    }

  }

  return (
    <div>
      <div>Crear Formulario</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" >Nombre:</label>
        <input
          name='name'
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && 'warning '}
        />
        <p className='danger'>{errors.name}</p>

        <label htmlFor="">Correo Electrónico:</label>
        <input
          name='email'
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && 'warning '}
        />
        <p className='danger'>{errors.email}</p>

        <label htmlFor="">Teléfono:</label>
        <input
          name='phone'
          placeholder="Escribe un teléfono..."
          type="number"
          value={inputs.phone}
          onChange={handleChange}
          className={errors.phone && 'warning '}
        />
        <p className='danger'>{errors.phone}</p>

        <label htmlFor="">Asunto:</label>
        <input
          name="subject"
          placeholder="Escribe el asunto..."
          type="text"
          value={inputs.subject}
          onChange={handleChange}
          className={errors.subject && 'warning '}
        />
        <p className='danger'>{errors.subject}</p>

        <label htmlFor="">Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && 'warning '}
        ></textarea>
        <p className='danger'>   {errors.message}     </p>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export function validate(inputs) {
  const errors = {}
  if (!inputs.name) errors.name = "Se requiere un nombre"

  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico"

  if (inputs.phone <= 0) errors.phone = "Sólo números positivos"

  if (!inputs.subject) errors.subject = "Se requiere un asunto"

  if (!inputs.message) errors.message = "Se requiere un mensaje"
  return errors
}