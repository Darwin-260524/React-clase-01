import { useState } from "react";

function Card({ nombre, descripcion, boton, informacion}) {

    const [mostrar, setMostrar] = useState(false);

    return (
        <article>
            <h2>{nombre}</h2>

            <p>{descripcion}</p>

            {mostrar && (
                <p>
                  {informacion}
                  </p>
            )}

            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ocultar": "Ver mas"}
            </button>
        </article>
    );
}

export default Card;
