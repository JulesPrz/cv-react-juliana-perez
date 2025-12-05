import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";

function App() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <StackTecnologias />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;