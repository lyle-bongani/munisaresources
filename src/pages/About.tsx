import React from 'react';
import AboutHero from '../components/about/abouthero';
import AboutVisionMission from '../components/about/AboutVisionMission';
import AboutCoreValues from '../components/about/AboutCoreValues';
import AboutLeadershipTeam from '../components/about/AboutLeadershipTeam';
import AboutGallery from '../components/about/AboutGallery';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutLeadershipTeam />
      <AboutGallery />
    </>
  );
};

export default About;
