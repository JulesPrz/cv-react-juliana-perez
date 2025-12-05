export default function CabeceraCV(props) {
  return (
    <header style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'white',
      borderRadius: '12px',
      marginBottom: '2rem'
    }}>
      <h1 style={{ margin: '0.5rem 0', fontSize: '2.5rem' }}>
        {props.nombre}
      </h1>
      <h2 style={{ margin: '0.5rem 0', fontWeight: '400', fontSize: '1.5rem' }}>
        {props.cargo}
      </h2>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '2rem',
        marginTop: '1rem',
        fontSize: '1rem',
        flexWrap: 'wrap'
      }}>
        <span>{props.ciudad}</span>
        <span>{props.telefono}</span>
        <span>{props.email}</span>
      </div>
    </header>
  );
}