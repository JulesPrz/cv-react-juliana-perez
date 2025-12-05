import { useState } from 'react';
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
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

  // Estado para manejar la lista de tecnologías dinámicamente
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Función para alternar la visibilidad de habilidades
  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  // Función para agregar una nueva tecnología al estado
  const agregarTecnologia = (nuevaTecnologia) => {
    // Usando el spread operator para mantener inmutabilidad
    setTecnologias(prevTecnologias => [...prevTecnologias, nuevaTecnologia]);
    
    // Mostrar confirmación
    console.log('Tecnología agregada:', nuevaTecnologia);
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
      
      {/* Componente para mostrar/ocultar habilidades */}
      <ToggleHabilidades 
        habilidades={habilidades}
        mostrar={mostrarHabilidades}
        toggleMostrar={toggleHabilidades}
      />

      {/* Formulario para agregar tecnologías - Pasamos la función como prop */}
      <FormularioTecnologia onAgregarTecnologia={agregarTecnologia} />

      {/* Stack de tecnologías ahora usa el estado dinámico */}
      <StackTecnologias tecnologias={tecnologias} />
      
      <Experiencia experiencias={experiencias} />
      <Educacion formacion={formacion} />
    </div>
  );
}

export default App;