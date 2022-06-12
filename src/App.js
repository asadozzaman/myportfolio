import './App.css'
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
    </div>
  );
}

export default App;
