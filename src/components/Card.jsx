import { useState } from "react";

function Card({ nombre, descripcion, boton, informacion }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <article>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      {mostrar && (
        <p className="tarjeta-informacion">
          {informacion}
        </p>
      )}
      <button className="tarjeta-boton" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : boton || "Ver mas"}
      </button>
    </article>
  );
}

export default Card;