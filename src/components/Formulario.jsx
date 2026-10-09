import { useState } from "react";

export default function Formulario({ onAgregarUsuario }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAgregarUsuario && nombre) {
      onAgregarUsuario(nombre);
    }
    setRegistrado(true);
  };

  return (
    <div className="seccion-contenedor">
      <h2>Registro de Usuario</h2>
      {registrado && (
        <p style={{ color: "var(--acento-primario)", fontWeight: "bold" }}>
          ¡Bienvenido, {nombre}! Te has registrado correctamente.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="formulario-campo">
          <label>Nombre:</label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setRegistrado(false);
            }}
          />
        </div>
        <div className="formulario-campo">
          <label>Correo:</label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="formulario-campo">
          <label>Contraseña:</label>
          <input type="password" required />
        </div>
        <button type="submit" className="tarjeta-boton" style={{ width: "100%" }}>
          Registrar
        </button>
      </form>
    </div>
  );
}