import React from 'react';
import Header from './Components/Header';
//import AstronautCard from './Components/AstronautsCard';
import AstronautsSection from './Components/AstronautsSection';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import MissionTimeline from './Components/MissionTimeline';
//import PlanetCard from './Components/PlanetCard';
import PlanetsSection from './Components/PlanetsSection';
import SpaceQuote from './Components/SpaceQuote';

const App = () => (
  <div>
    <Header />
    <Hero />
    <PlanetsSection />
    <AstronautsSection />
    <MissionTimeline />
    <SpaceQuote />
    <Footer />
  </div>
);

export default App;