function Formulario() {
    return (
        <section>
            <h2>Registro</h2>

            <form>
                <label>Nombre:</label>
                <input type="text" />

                <label>Correo:</label>
                <input type="email" />

                <label>Contraseña:</label>
                <input type="password" />

                <button type="submit"
                >Registrarme</button>

            </form>
        </section>
    )
}

export default Formulario;