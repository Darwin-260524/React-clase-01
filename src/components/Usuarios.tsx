import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  name: string;
};

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(true); // Estado para ocultar

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsuarios(datos);
      });
  }, []);

  return (
    <section>
      <h2>Usuarios</h2>

      {/* Botón para ocultar/mostrar */}
      <button onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>
        {mostrarUsuarios ? "Ocultar usuarios" : "Mostrar usuarios"}
      </button>

      {/* Si mostrarUsuarios es true, muestra la lista */}
      {mostrarUsuarios && (
        <div>
          {usuarios.map((usuario) => (
            <p key={usuario.id}>{usuario.name}</p>
          ))}
        </div>
      )}
    </section>
  );
}

export default Usuarios;