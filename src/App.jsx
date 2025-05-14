import "./App.css";
import Navbar from "./Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import PixelSection from "./pages/PixelSection/PixelSection";
import Section2 from "./pages/Section2/Section2";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
import Section5 from "./pages/Section5/Section5";
import Section6 from "./pages/Section6/Section6";
import useLenis from "./useLenis";

function App() {
  useLenis();

  return (
    <>
      <main>
        <Navbar />
        <PixelSection />
        <Section5 />
        <Section6 />
        <Section3 />
        <Section2 />
        <Section4 />
        <Contact />
      </main>
    </>
  );
}
export default App;