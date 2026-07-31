import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <div className="content-grid">
          <div className="left-panel">
            <About />
            <Education />
          </div>
          <div className="right-panel">
            <Projects />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}