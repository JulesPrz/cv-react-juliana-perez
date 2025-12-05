const Educacion = ({ formacion }) => {
  // Función para obtener el color según el tipo de formación
  const obtenerColorTipo = (tipo) => {
    const colores = {
      "Tecnólogo": "#a237a4ff",
      "Técnico": "#a077a1ff",
      "Curso": "#58105aff",
      "Taller": "#710a5eff",
      "Seminario": "rgba(117, 21, 106, 1)ff"
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