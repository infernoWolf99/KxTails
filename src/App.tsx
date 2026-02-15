import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div className="bg-green-500">Hello</div>
    </>
  );
}

export default App;
