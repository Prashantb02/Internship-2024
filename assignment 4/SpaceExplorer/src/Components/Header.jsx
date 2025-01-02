import React from 'react';

const styles = {
  header: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  }
};

const Header = () => (
  <header style={styles.header}>
    <h1>Space Explorer</h1>
    <nav style={styles.nav}>
      <a href="#planets">Planets</a>
      <a href="#astronauts">Astronauts</a>
      <a href="#missions">Missions</a>
    </nav>
  </header>
);

export default Header;