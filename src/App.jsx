import NavBar from "./components/NavBar";
import Features from "./pages/Features";
import HeroSection from "./pages/HeroSection";
import Extension from "./pages/Extension"
import Questions from "./pages/Questions";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/> 
      <Features/>
      <Extension/>
      <Questions/> 
      <Contact/>
    </>
  );
}

export default App;
