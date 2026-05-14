function App() {
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #b2f713, #eb092f)',
    boxSizing: 'border-box'
  };

  const formStyle = {
    background: 'linear-gradient(135deg, #09c758, #b2f713)',
    padding: '40px',
    borderRadius: '18px',
    width: '100%',
    maxWidth: '400px',
    border: '2px solid #200346',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '0 0 10px 0',
    color: '#1e3a8a',
    fontFamily: 'sans-serif',
    letterSpacing: '1px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
    textDecoration: 'underline',
    textDecorationColor: '#000000',
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px'
  };

  const inputStyle = {
  width: '100%',
  padding: '13px 15px',
  border: '2px solid #000000',
  borderRadius: '10px',
  fontSize: '16px',
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
  background: 'linear-gradient(135deg, #ffffff, #b2f713)',
  boxShadow: '0 0 8px rgba(255, 0, 0, 0.35)',
  transition: '0.3s'
};


  const buttonStyle = {
  width: '160px',
  alignSelf: 'center',
  padding: '14px',
  background: 'linear-gradient(135deg, #b2f713, #eb092f)',
  color: '#5501db',
  border: '2px solid #000000',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '10px',
  fontFamily: 'sans-serif',
  boxShadow: '0 5px 12px rgba(37, 99, 235, 0.4)',
  transition: '0.3s'
};

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
        <h2 style={headingStyle}>Student Registration Form</h2>
        
        <input style={inputStyle} type="text" placeholder="Student Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <input style={inputStyle} type="password" placeholder="Password" />
        <input style={inputStyle} type="text" placeholder="Course" />
        <input style={inputStyle} type="tel" placeholder="Mobile Number" />
        
        <button style={buttonStyle} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;