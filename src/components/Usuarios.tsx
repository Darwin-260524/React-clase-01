import { useState } from "react";

interface UsuariosProps {
  lista?: string[];
}

export default function Usuarios({ lista = [] }: UsuariosProps) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="seccion-contenedor">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Usuarios Registrados</h2>
        <button
          className="tarjeta-boton"
          style={{ width: "auto", padding: "0.4rem 0.8rem" }}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Ocultar usuarios" : "Mostrar usuarios"}
        </button>
      </div>

      {visible && (
        <>
          {lista.length === 0 ? (
            <p style={{ color: "var(--texto-secundario)", fontStyle: "italic", marginTop: "1rem" }}>
              No hay usuarios registrados aún. ¡Sé el primero en registrarte arriba!
            </p>
          ) : (
            <ul className="lista-usuarios">
              {lista.map((usr, index) => (
                <li key={index} className="item-usuario">
                  {usr}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}