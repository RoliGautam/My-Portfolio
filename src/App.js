import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Experience from './Component/Experience';
import Achievements from './Component/Achievements';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
