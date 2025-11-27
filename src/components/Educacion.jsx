const Educacion = () => {
  const formacion = [
    {
      id: 1,
      tipo: "Tecnólogo",
      institucion: "SENA - Servicio Nacional de Aprendizaje",
      nombre: "Análisis y Desarrollo de Software",
      año: 2023
    },
    {
      id: 2,
      tipo: "Técnico",
      institucion: "SENA",
      nombre: "Programación de Software",
      año: 2021
    },
    {
      id: 3,
      tipo: "Curso",
      institucion: "Platzi",
      nombre: "Curso Profesional de React.js",
      año: 2023
    },
    {
      id: 4,
      tipo: "Curso",
      institucion: "Udemy",
      nombre: "JavaScript Moderno - ES6+",
      año: 2022
    },
    {
      id: 5,
      tipo: "Curso",
      institucion: "freeCodeCamp",
      nombre: "Responsive Web Design Certification",
      año: 2022
    },
    {
      id: 6,
      tipo: "Taller",
      institucion: "Google Developers",
      nombre: "Taller de Progressive Web Apps (PWA)",
      año: 2023
    },
    {
      id: 7,
      tipo: "Seminario",
      institucion: "Universidad Nacional",
      nombre: "Seminario de Inteligencia Artificial y Machine Learning",
      año: 2023
    },
    {
      id: 8,
      tipo: "Curso",
      institucion: "Coursera",
      nombre: "Git y GitHub para Desarrolladores",
      año: 2022
    },
    {
      id: 9,
      tipo: "Taller",
      institucion: "Ministerio TIC",
      nombre: "Taller de Ciberseguridad Básica",
      año: 2023
    },
    {
      id: 10,
      tipo: "Curso",
      institucion: "Platzi",
      nombre: "Curso de Node.js y Express",
      año: 2023
    },
    {
      id: 11,
      tipo: "Seminario",
      institucion: "Campus Party Colombia",
      nombre: "Seminario de Desarrollo Web Full Stack",
      año: 2022
    },
    {
      id: 12,
      tipo: "Curso",
      institucion: "LinkedIn Learning",
      nombre: "Fundamentos de Bases de Datos",
      año: 2022
    }
  ];

  // Función para obtener el color según el tipo de formación
  const obtenerColorTipo = (tipo) => {
    const colores = {
      "Tecnólogo": "#10b981",
      "Técnico": "#3b82f6",
      "Curso": "#f59e0b",
      "Taller": "#8b5cf6",
      "Seminario": "#ec4899"
    };
    return colores[tipo] || "#6b7280";
  };

  return (
    <section className="educacion-section">
      <h2>🎓 Formación Académica</h2>
      <div className="educacion-container">
        {formacion.map((edu) => (
          <div key={edu.id} className="educacion-card">
            <div className="educacion-header">
              <span 
                className="tipo-badge" 
                style={{ backgroundColor: obtenerColorTipo(edu.tipo) }}
              >
                {edu.tipo}
              </span>
              <span className="año-educacion">{edu.año}</span>
            </div>
            <h3>{edu.nombre}</h3>
            <p className="institucion">{edu.institucion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educacion;