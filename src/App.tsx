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
          nombre="Didesño web"
          descripcion="Diseño moderno atractivo para tu sitio web"
        />
        <Card
          nombre="Marketing digital"
          descripcion="Estrategias efectivas para promocionar tu negocio en linea"
        />
      </section>

      <Footer />
    </div>
  );
}

export default App;
