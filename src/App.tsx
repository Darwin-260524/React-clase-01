import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <section>
        <Card
          nombre="Diseño web"
          descripcion="Diseño moderno y atractivo para tu sitio web"
          boton="Ver más"
          informacion="Escoge tu diseño:
          Clasico
          Naturaleza
          Moder"
          
          
        />

        <Card
          nombre="Desarrollo web"
          descripcion="Desarrollo de aplicaciones web modernas y eficientes"
          boton="Ver más"
          informacion="Aqui puedes ver elprogreso de tu pagina web"
        />

        <Card
          nombre="Bases de datos"
          descripcion="Base de datos de la pagina"
          boton="Ver más"
          informacion="Agrege sus datos"
        />

      </section>

      <Footer />

    </div>

  );
}

export default App;