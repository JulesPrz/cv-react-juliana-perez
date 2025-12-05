export default function Perfil({ resumen }) {
  return (
    <section style={{
      margin: '2rem 0',
      padding: '2rem',
      background: '#830f85ff',
      borderRadius: '12px'
    }}>
      <h2 style={{ 
        color: '#ffffff', 
        marginBottom: '1rem',
        fontSize: '1.8rem'
      }}>
        Perfil Profesional
      </h2>
      <p style={{
        color: '#ffffffff',
        lineHeight: '1.8',
        fontSize: '1.1rem',
        margin: 0
      }}>
        {resumen}
      </p>
    </section>
  );
}