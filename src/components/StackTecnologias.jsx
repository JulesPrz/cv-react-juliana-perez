const StackTecnologias = () => {
  const tecnologias = [
    { id: 1, nombre: "JavaScript", nivel: "avanzado" },
    { id: 2, nombre: "React", nivel: "avanzado" },
    { id: 3, nombre: "HTML5", nivel: "avanzado" },
    { id: 4, nombre: "CSS3", nivel: "avanzado" },
    { id: 5, nombre: "Node.js", nivel: "intermedio" },
    { id: 6, nombre: "Vite", nivel: "intermedio" },
    { id: 7, nombre: "MongoDB", nivel: "intermedio" },
    { id: 8, nombre: "Git", nivel: "avanzado" },
    { id: 9, nombre: "GitHub", nivel: "avanzado" },
    { id: 10, nombre: "Tailwind CSS", nivel: "intermedio" },
    { id: 11, nombre: "TypeScript", nivel: "basico" },
    { id: 12, nombre: "Python", nivel: "basico" },
    { id: 13, nombre: "MySQL", nivel: "intermedio" },
    
  ];

  // Función para obtener el color según el nivel
  const obtenerColor = (nivel) => {
    if (nivel === "avanzado") {
      return "#830f85ff"; 
    } else if (nivel === "intermedio") {
      return "#a237a4ff"; 
    } else {
      return "#c43cc6ff"; 
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
      <h2>Stack de Tecnologías</h2>
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