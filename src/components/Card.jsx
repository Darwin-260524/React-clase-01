function Card({ nombre, descripcion, boton }) {
  function mostrarMensaje() {
    console.log("Hiciste click en el boton");
  }

  return (
    <article>
      <h2>{nombre}</h2>

      <p>{descripcion}</p>

      <button onClick={mostrarMensaje}>
        {boton}
      </button>
    </article>
  );
}

export default Card;
