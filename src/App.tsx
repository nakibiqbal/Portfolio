import { useEffect, useState } from "react";
import "../public/PixelFont/font.css";
import "../public/Blockstepped/font.css";
import "../public/Quicsand/font.css";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import PreLoader from "./PreLoader";
import Navbar from "./Navbar/Navbar";
import Section5 from "./legacy-pages/Section5/Section5";
import Section6 from "./legacy-pages/Section6/Section6";
import Section3 from "./legacy-pages/Section3/Section3";
import Section2 from "./legacy-pages/Section2/Section2";
import Section4 from "./legacy-pages/Section4/Section4";
import Section7 from "./legacy-pages/Section7/Section7";
import Contact from "./legacy-pages/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader setLoading={setLoading} />
      ) : (
        <main>
          <Navbar />
          <Section5 />
          <Section6 />
          <Section3 />
          <Section2 />
          <Section4 />
          <Section7 />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
