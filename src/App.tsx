import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <div className="h-screen bg-black"></div>
      </main>
    </>
  );
}

export default App;
