export default function CabeceraCV() {
  return (
    <header style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'white',
      borderRadius: '12px',
      marginBottom: '2rem'
    }}>
      <h1 style={{ margin: '0.5rem 0', fontSize: '2.5rem' }}>
        Juliana Pérez Chavarría
      </h1>
      <h2 style={{ margin: '0.5rem 0', fontWeight: '400', fontSize: '1.5rem' }}>
        Desarrollador FullStack Jr.
      </h2>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '2rem',
        marginTop: '1rem',
        fontSize: '1rem'
      }}>
        <span>3137369217</span>
        <span>julisperez.ch@gmail.com</span>
      </div>
    </header>
  );
}
