import { useEffect, useState } from "react";
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

      {loading ? <PreLoader setLoading={setLoading} /> : <MainApp />}

    </>
  );
}
export default App;