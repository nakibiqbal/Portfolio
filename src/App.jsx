import { useEffect, useState } from "react";
import "../public/PixelFont/font.css"
import "../public/Blockstepped/font.css"
import "../public/Quicsand/font.css"
import "./App.css";
import Lenis from "@studio-freight/lenis";
import PreLoader from "./PreLoader";
import MainApp from "./MainApp";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>

      <PreLoader setLoading={setLoading} />
      {/* {loading ? <PreLoader setLoading={setLoading} /> : <MainApp />} */}

    </>
  );
}
export default App;