import { useState } from 'react';
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import { 
  datosPersonales, 
  perfilProfesional, 
  experiencias, 
  formacion, 
  tecnologiasIniciales,
  habilidades 
} from "./data/cvData.js";

function App() {
  // Estado para controlar la visibilidad de habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  // Función para alternar la visibilidad
  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <CabeceraCV 
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        telefono={datosPersonales.telefono}
        email={datosPersonales.email}
      />
      <Perfil resumen={perfilProfesional.resumen} />
      
      {/* Nuevo componente interactivo */}
      <ToggleHabilidades 
        habilidades={habilidades}
        mostrar={mostrarHabilidades}
        toggleMostrar={toggleHabilidades}
      />

      <StackTecnologias tecnologias={tecnologiasIniciales} />
      <Experiencia experiencias={experiencias} />
      <Educacion formacion={formacion} />
    </div>
  );
}

export default App;