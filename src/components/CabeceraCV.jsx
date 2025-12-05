export default function CabeceraCV({ nombre, cargo, ciudad, telefono, email }) {
  return (
    <header style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'white',
      borderRadius: '12px',
      marginBottom: '2rem'
    }}>
      <h1 style={{ margin: '0.5rem 0', fontSize: '2.5rem' }}>
        {nombre}
      </h1>
      <h2 style={{ margin: '0.5rem 0', fontWeight: '400', fontSize: '1.5rem' }}>
        {cargo}
      </h2>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '2rem',
        marginTop: '1rem',
        fontSize: '1rem',
        flexWrap: 'wrap'
      }}>
        <span>{ciudad}</span>
        <span>{telefono}</span>
        <span>{email}</span>
      </div>
    </header>
  );
}