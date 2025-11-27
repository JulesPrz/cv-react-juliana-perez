const StackTecnologias = () => {
  const tecnologias = [
    { id: 1, nombre: "JavaScript", nivel: "avanzado" },
    { id: 2, nombre: "React", nivel: "avanzado" },
    { id: 3, nombre: "HTML5", nivel: "avanzado" },
    { id: 4, nombre: "CSS3", nivel: "avanzado" },
    { id: 5, nombre: "Node.js", nivel: "intermedio" },
    { id: 6, nombre: "Express", nivel: "intermedio" },
    { id: 7, nombre: "MongoDB", nivel: "intermedio" },
    { id: 8, nombre: "Git", nivel: "avanzado" },
    { id: 9, nombre: "GitHub", nivel: "avanzado" },
    { id: 10, nombre: "Tailwind CSS", nivel: "intermedio" },
    { id: 11, nombre: "Bootstrap", nivel: "intermedio" },
    { id: 12, nombre: "TypeScript", nivel: "basico" },
    { id: 13, nombre: "Python", nivel: "basico" },
    { id: 14, nombre: "MySQL", nivel: "intermedio" },
    { id: 15, nombre: "Vite", nivel: "intermedio" }
  ];

  // Función para obtener el color según el nivel
  const obtenerColor = (nivel) => {
    if (nivel === "avanzado") {
      return "#10b981"; // Verde
    } else if (nivel === "intermedio") {
      return "#f59e0b"; // Naranja
    } else {
      return "#3b82f6"; // Azul
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
      <h2>💻 Stack de Tecnologías</h2>
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
      
      <div className="leyenda">
        <h3>Nivel de dominio:</h3>
        <div className="leyenda-items">
          <div className="leyenda-item">
            <span className="leyenda-color" style={{ backgroundColor: "#10b981" }}></span>
            <span>⭐⭐⭐ Avanzado</span>
          </div>
          <div className="leyenda-item">
            <span className="leyenda-color" style={{ backgroundColor: "#f59e0b" }}></span>
            <span>⭐⭐ Intermedio</span>
          </div>
          <div className="leyenda-item">
            <span className="leyenda-color" style={{ backgroundColor: "#3b82f6" }}></span>
            <span>⭐ Básico</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackTecnologias;