import React from 'react';
import PlanetCard from './PlanetCard';

const styles = {
  section: {
    padding: '40px',
    margin: '20px 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px'
  }
};

const PlanetsSection = () => (
  <section style={styles.section} id="planets">
    <h2>Our Solar System</h2>
    <div style={styles.grid}>
      <PlanetCard name="Mars" description="The Red Planet" />
      <PlanetCard name="Venus" description="Morning Star" />
      <PlanetCard name="Jupiter" description="Gas Giant" />
    </div>
  </section>
);

export default PlanetsSection;