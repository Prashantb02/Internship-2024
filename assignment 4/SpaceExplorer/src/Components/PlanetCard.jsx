import React from 'react';

const styles = {
  card: {
    border: '1px solid #333',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
    color: 'white'
  }
};

const PlanetCard = ({ name, description }) => (
  <div style={styles.card}>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default PlanetCard;