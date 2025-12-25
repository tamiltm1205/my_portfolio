import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/Project';
import Resume from './components/Resume';


      

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/> 
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
