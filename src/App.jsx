import { useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    process: processRef,
    contact: contactRef,
  };

  const handleNavigate = useCallback((target) => {
    const ref = sectionRefs[target];
    if (ref?.current) {
      const headerOffset = 72; // var(--header-height)
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero ref={heroRef} onNavigate={handleNavigate} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Process ref={processRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}
