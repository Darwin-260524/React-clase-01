function Navbar() {
  return (
    <nav>
      
      <h2>Mi Aplicacion</h2>

      <ul>

        <li>
          <button onClick={() => alert("Bienvenido, desea registrarse en nuestra pagina?")}>
            inicio
          </button>
        </li>

        <li>
          <button onClick={() => alert("Que servicios desea adquirir")}>
            Servicios
          </button>
        </li>

        <li>
          <button onClick={() => alert("Contactos para servicio al cliente")}>
            Contactos
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
