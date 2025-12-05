const Experiencia = ({ experiencias }) => {
  return (
    <section className="experiencia-section">
      <h2>Experiencia Laboral y Proyectos</h2>
      <div className="experiencias-container">
        {experiencias.map((exp) => (
          <div key={exp.id} className="experiencia-card">
            <div className="experiencia-header">
              <h3>{exp.cargo}</h3>
              <span className="año-badge">{exp.año}</span>
            </div>
            <h4>{exp.empresa}</h4>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0' }}>
              {exp.periodo}
            </p>
            <p>{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;