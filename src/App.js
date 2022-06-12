import './App.css'
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Intro from "./Components/Into/Intro";
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
