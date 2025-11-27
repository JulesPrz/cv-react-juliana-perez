const Experiencia = () => {
  const experiencias = [
    {
      id: 1,
      cargo: "Desarrolladora Frontend",
      empresa: "Tech Solutions SAS",
      año: 2023,
      descripcion: "Desarrollo de interfaces web responsivas con React y Tailwind CSS. Implementación de componentes reutilizables y optimización del rendimiento."
    },
    {
      id: 2,
      cargo: "Desarrolladora Full Stack Junior",
      empresa: "Innovatech Colombia",
      año: 2022,
      descripcion: "Desarrollo de aplicaciones web con MERN stack. Participación en proyectos de e-commerce y sistemas de gestión."
    },
    {
      id: 3,
      cargo: "Practicante de Desarrollo Web",
      empresa: "Digital Agency Bogotá",
      año: 2021,
      descripcion: "Maquetación HTML/CSS, integración de APIs REST y mantenimiento de sitios web corporativos."
    },
    {
      id: 4,
      cargo: "Proyecto Personal - Portfolio Web",
      empresa: "Freelance",
      año: 2023,
      descripcion: "Diseño y desarrollo de portafolio personal utilizando React, con animaciones y diseño moderno."
    },
    {
      id: 5,
      cargo: "Proyecto - Sistema de Inventario",
      empresa: "Universidad Nacional",
      año: 2022,
      descripcion: "Desarrollo de sistema de gestión de inventario con Node.js, Express y MongoDB para proyecto académico."
    },
    {
      id: 6,
      cargo: "Proyecto - App de Tareas",
      empresa: "Proyecto Personal",
      año: 2023,
      descripcion: "Aplicación de gestión de tareas con React y localStorage. Implementación de CRUD completo y filtros."
    },
    {
      id: 7,
      cargo: "Asistente de TI",
      empresa: "Corporación Empresarial",
      año: 2020,
      descripcion: "Soporte técnico, mantenimiento de equipos y asistencia en implementación de soluciones tecnológicas."
    },
    {
      id: 8,
      cargo: "Proyecto - Landing Page Restaurante",
      empresa: "Freelance",
      año: 2022,
      descripcion: "Diseño y desarrollo de landing page para restaurante local con sistema de reservas y galería de menú."
    },
    {
      id: 9,
      cargo: "Proyecto - Blog Tecnológico",
      empresa: "Proyecto Personal",
      año: 2023,
      descripcion: "Blog personal sobre desarrollo web con sistema de comentarios y administración de contenido."
    },
    {
      id: 10,
      cargo: "Colaboradora Open Source",
      empresa: "GitHub Community",
      año: 2023,
      descripcion: "Contribuciones a proyectos open source, corrección de bugs y mejora de documentación."
    }
  ];

  return (
    <section className="experiencia-section">
      <h2>💼 Experiencia Laboral y Proyectos</h2>
      <div className="experiencias-container">
        {experiencias.map((exp) => (
          <div key={exp.id} className="experiencia-card">
            <div className="experiencia-header">
              <h3>{exp.cargo}</h3>
              <span className="año-badge">{exp.año}</span>
            </div>
            <h4>{exp.empresa}</h4>
            <p>{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
