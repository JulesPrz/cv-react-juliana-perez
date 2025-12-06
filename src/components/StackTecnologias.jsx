const StackTecnologias = ({ tecnologias }) => {
  // Función para obtener el color según el nivel
  const obtenerColor = (nivel) => {
    if (nivel === "avanzado") {
      return "#830f85ff"; // Verde
    } else if (nivel === "intermedio") {
      return "#a237a4ff"; // Naranja
    } else {
      return "#c43cc6ff"; // Azul
    }
  };

  // Función para obtener el ícono según el nivel
  const obtenerIcono = (nivel) => {
    if (nivel === "avanzado") {
      return "⭐⭐⭐";
    } else if (nivel === "intermedio") {
      return "⭐⭐";
    } else {
      return "⭐";
    }
  };

  return (
    <section className="stack-section">
      <h2>Stack de Tecnologías ({tecnologias.length})</h2>
      <div className="tecnologias-container">
        {tecnologias.map((tech) => (
          <div 
            key={tech.id} 
            className="tech-tag"
            style={{ 
              backgroundColor: obtenerColor(tech.nivel),
              borderColor: obtenerColor(tech.nivel)
            }}
          >
            <span className="tech-nombre">{tech.nombre}</span>
            <span className="tech-nivel">{obtenerIcono(tech.nivel)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackTecnologias;