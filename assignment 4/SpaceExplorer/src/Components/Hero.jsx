import React from 'react';

const styles = {
  hero: {
    height: '400px',
    backgroundColor: '#2a2a5a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#4a4a8a',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

const Hero = () => (
  <section style={styles.hero}>
    <h2>Explore The Cosmos</h2>
    <p>Journey through space and time</p>
    <button style={styles.button}>Launch Mission</button>
  </section>
);

export default Hero;