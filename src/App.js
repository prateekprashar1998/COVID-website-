
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from "./components/About/About.js"
import Skills from './components/Skills/Skills'
import YouTube from './components/YouTube/YouTube'
import Contact from "./components/Contact/Contact.js"



const App =() =>{
  return (
    <div className="App">
      
      < NavBar />
      < Home />
       <About />
       <Skills />
       <YouTube/>
      < Contact/>
      
     
    
    </div>
  );
}
export default App;
