import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Temp from './components/Temp';
const App = () => {
	return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section id='Projects'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
    <section id='About'>About</section>
    {/* <Temp/>
    <Temp/> */}
  </div>;
};

export default App;
