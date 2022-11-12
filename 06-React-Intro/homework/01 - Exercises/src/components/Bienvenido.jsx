import React from "react";
import Botones from "./Botones";

const studentName = "Javier Santiago Diaz Arcila";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  let lista = techSkills.map(Element => <li>{Element}</li>)
  return (
    <div>
      <h1>Primera pagina con componentes de React</h1>
      <h3>{studentName}</h3>
      <ul>{lista}</ul>
      <Botones alerts={alerts}></Botones>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
