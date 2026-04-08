import React from 'react';
import bannerImage from '../../assets/kb-banner.jpg';
import websiteCopy from '../../data/websiteCopy.json';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="overlay"></div>
          <img src={bannerImage} alt="Fitness training banner" className="banner-image" />

        </div>
        <div className="hero-content">
          <h1>{websiteCopy.home.hero.title}</h1>
          <p>{websiteCopy.home.hero.subtitle}</p>
          <div className="cta-buttons">
            <PrimaryButton href="/booking">
              {websiteCopy.home.hero.ctaPrimary}
            </PrimaryButton>
            <SecondaryButton href="/services">
              {websiteCopy.home.hero.ctaSecondary}
            </SecondaryButton>
          </div>
        </div>
      </section>
      
      <section className="intro">
        <h2>{websiteCopy.home.intro.title}</h2>
        <p>{websiteCopy.home.intro.paragraph1}</p>
        <p>{websiteCopy.home.intro.paragraph2}</p>
      </section>
    </div>
  );
};

export default Home;
