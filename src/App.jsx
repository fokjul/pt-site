import React from 'react';
import Header from './components/Organisms/Header/Header';
import Hero from './components/Organisms/Hero/Hero';
import AboutSection from './components/Organisms/AboutSection/AboutSection';
import MembershipSection from './components/Organisms/MembershipSection/MembershipSection';
import ReviewsSection from './components/Organisms/ReviewsSection/ReviewsSection';
import ContactSection from './components/Organisms/ContactSection/ContactSection';
import Footer from './components/Organisms/Footer/Footer';
import './styles/partials/_index.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutSection variant="A" id="classes" />
        <MembershipSection />
        <ReviewsSection />
        <AboutSection variant="B" id="about" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
