import { useState } from "react";
function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => respuesta.json())
            .then((datos) => setUsuarios(datos))
    }
  
    return (
        <section>
            <h2>Usuarios</h2>

        </section>
    );
}

export default Usuarios;