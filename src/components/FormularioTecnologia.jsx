import { useState } from 'react';

const FormularioTecnologia = ({ onAgregarTecnologia }) => {
  // Estados locales para los inputs controlados
  const [nombre, setNombre] = useState('');
  const [nivel, setNivel] = useState('basico');

  // Manejador del evento submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Validación básica
    if (nombre.trim() === '') {
      alert('Por favor, ingresa el nombre de la tecnología');
      return;
    }

    // Crear objeto de nueva tecnología
    const nuevaTecnologia = {
      id: Date.now(), // ID único basado en timestamp
      nombre: nombre.trim(),
      nivel: nivel
    };

    // Llamar a la función del padre para agregar la tecnología
    onAgregarTecnologia(nuevaTecnologia);

    // Limpiar el formulario
    setNombre('');
    setNivel('basico');
  };

  return (
    <section style={{
      margin: '2rem 0',
      padding: '2rem',
      background: '#1a1a1a',
      borderRadius: '12px',
    }}>
      <h2 style={{ 
        color: '#ffffff', 
        fontSize: '1.8rem', 
        marginBottom: '1.5rem' 
      }}>
        Agregar Nueva Tecnología
      </h2>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px'
      }}>
        {/* Input para nombre de tecnología */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="nombre" style={{ 
            color: '#ffffff', 
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            Nombre de la Tecnología:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Docker, Redux, PostgreSQL..."
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: '2px solid #830f85ff',
              background: '#2d2d2d',
              color: '#ffffff',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#830f85ff'}
            onBlur={(e) => e.target.style.borderColor = '#830f85ff'}
          />
        </div>

        {/* Select para nivel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="nivel" style={{ 
            color: '#ffffff', 
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            Nivel de Dominio:
          </label>
          <select
            id="nivel"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '8px',
              background: '#2d2d2d',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="basico">⭐ Básico</option>
            <option value="intermedio">⭐⭐ Intermedio</option>
            <option value="avanzado">⭐⭐⭐ Avanzado</option>
          </select>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          style={{
            padding: '0.875rem 2rem',
            fontSize: '1rem',
            fontWeight: '700',
            background: '#830f85ff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            marginTop: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
          }}
        >
          Agregar Tecnología
        </button>
      </form>

      {/* Instrucciones */}
      <p style={{
        color: '#9ca3af',
        fontSize: '0.875rem',
        marginTop: '1rem',
        fontStyle: 'italic'
      }}>
      </p>
    </section>
  );
};

export default FormularioTecnologia;