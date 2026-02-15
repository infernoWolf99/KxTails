import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Cocktails />
      </main>
    </>
  );
}

export default App;
