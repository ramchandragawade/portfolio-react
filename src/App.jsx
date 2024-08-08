import './app.scss';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
const App = () => {
	return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Skills'>
      <Parallax type='skills'/>
    </section>
    <section>
      <Skills/>
    </section>
    <section id='Projects'>
      <Parallax type='projects'/>
    </section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
    <section id='About'>About</section>
  </div>;
};

export default App;
