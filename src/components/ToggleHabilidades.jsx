import Habilidades from './Habilidades';

const ToggleHabilidades = ({ habilidades, mostrar, toggleMostrar }) => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <button
        onClick={toggleMostrar}
        style={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          fontWeight: '600',
          background: mostrar 
            ? '#830f85ff' 
            : '#830f85ff' ,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          margin: '0 auto'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        {mostrar ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>

      {/* Renderizado condicional */}
      {mostrar && <Habilidades habilidades={habilidades} />}
    </div>
  );
};

export default ToggleHabilidades;