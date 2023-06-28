import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="fixed_links">
        <a className="link" href='#about' >About</a>
        <a className="link" href='#Projects'>Projects</a>
        <a className="link" href='#Contact'>Contact</a>
      </div>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
