import React from 'react';

const styles = {
  section: {
    padding: '40px',
    margin: '20px 0'
  },
  card: {
    border: '1px solid #333',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
    color: 'white'
  }
};

const MissionTimeline = () => (
  <section style={styles.section} id="missions">
    <h2>Space Missions</h2>
    <div style={{...styles.card, margin: '20px 0'}}>
      <h3>Current Mission</h3>
      <p>Mars Exploration</p>
    </div>
  </section>
);

export default MissionTimeline;