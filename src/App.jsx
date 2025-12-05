import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import { datosPersonales, perfilProfesional, experiencias, formacion, tecnologias } from "./data/cvData.js";

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <CabeceraCV 
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        telefono={datosPersonales.telefono}
        email={datosPersonales.email}
      />
      <Perfil />
      <StackTecnologias />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;