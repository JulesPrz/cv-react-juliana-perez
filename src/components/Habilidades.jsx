const Habilidades = ({ habilidades }) => {
  return (
    <section style={{
      margin: '2rem 0',
      padding: '2rem',
      
      borderRadius: '12px',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
        Habilidades Profesionales
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {habilidades.map((habilidad) => (
          <div 
            key={habilidad.id}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ 
              fontSize: '1.1rem', 
              margin: '0 0 0.5rem 0',
              fontWeight: '600'
            }}>
              {habilidad.nombre}
            </h3>
            <p style={{ 
              fontSize: '0.9rem', 
              margin: 0,
              opacity: 0.9
            }}>
              {habilidad.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;