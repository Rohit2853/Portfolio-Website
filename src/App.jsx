import './App.css';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Project from './project';
import Footer from './Footer';
import {FaArrowUp} from 'react-icons/fa';
function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
      <a href="#home" className='top-link'><FaArrowUp></FaArrowUp></a>
      
      
    </main>
  )
}

export default App;
