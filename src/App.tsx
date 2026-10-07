import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App(){
  const servicios = [
    {
      nombre: "Diseño web",
      descripcion: "Diseño moderno y atractivo para tu sitio web",
      servicio: "Este servicio incluye diseño de interface,HTML,CSS y JavaScript para crear una experiencia de usuariio atractiva y funcional."
    },
    {
      nombre: "Desarrollo web",
      descripcion: "Desarrollo de aplicaciones web modernas y eficientes",
      servicio: "Construcción de aplicaciones, sitios web y sistemas personalizados."
    },
    {
      nombre: "Marketing digital",
      descripcion: "Estrategias efectivas para promocionar tu negocio en línea",
      servicio: "Estrategias de marketing digital para aumentar la visibilidad y el tráfico de tu sitio web."
    }
  ];
  return(
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
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;