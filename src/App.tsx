import Formulario from "./components/Formulario";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Usuarios from "./components/Usuarios";


function App() {
  const servicios = [
    {
      nombre: "Diseño web",
      descripcion: "Diseño moderno y atractivo para tu sitio web",
      servicio: "Este servicio incluye diseño de interface,HTML,CSS y JavaScript para crear una experiencia de usuariio atractiva y funcional.",
      boton: "Ver más",
      informacion: "Este servicio incluye diseño de interface, HTML, CSS y JavaScript para crear una experiencia de usuario atractiva y funcional."
    },

    {
      nombre: "Desarrollo",
      descripcion: "Desarrollo de aplicaciones web modernas y eficientes",
      servicio: "Construcción de aplicaciones, sitios web y sistemas personalizados.",
      boton: "Ver más",
      informacion: "Construcción de aplicaciones, sitios web y sistemas personalizados."
    },

    {
      nombre: "Bases de datos",
      descripcion: "Gestión y optimización de bases de datos para tu aplicación",
      servicio: "Diseño, implementación y mantenimiento de bases de datos para garantizar la integridad y eficiencia de los datos.",
      boton: "Ver más",
      informacion: "Diseño, implementación y mantenimiento de bases de datos para garantizar la integridad y eficiencia de los datos."
    },

    {
      nombre: "Seguridad",
      descripcion: "Protección de tu sitio web y datos contra amenazas cibernéticas",
      servicio: "Implementación de medidas de seguridad para proteger tu sitio web y los datos de los usuarios.",
      boton: "Ver más",
      informacion: "Implementación de medidas de seguridad para proteger tu sitio web y los datos de los usuarios."
    },

  ];
  return (
    <div>
      <Navbar />

      <Hero />

      <section>
        {servicios.map((servicio) => (
          <Card
            key={servicio.nombre}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            servicio={servicio.servicio}
            boton={servicio.boton}
            informacion={servicio.informacion}
          />
        ))}
      </section>
      <Formulario />
      <Usuarios />
      <Footer />
    </div>

  );
}

export default App;