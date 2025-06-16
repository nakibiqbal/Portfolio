import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Navbar/Navbar";
import PixelSection from "./pages/PixelSection/PixelSection";
// const Navbar = lazy(() => import("./Navbar/Navbar"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
// const PixelSection = lazy(() => import("./pages/PixelSection/PixelSection"));
const Section2 = lazy(() => import("./pages/Section2/Section2"));
const Section3 = lazy(() => import("./pages/Section3/Section3"));
const Section4 = lazy(() => import("./pages/Section4/Section4"));
const Section5 = lazy(() => import("./pages/Section5/Section5"));
const Section6 = lazy(() => import("./pages/Section6/Section6"));
const Section7 = lazy(() => import("./pages/Section7/Section7"));
const Images = lazy(() => import("./pages/My_Images/Images"));
import Loader from "./Loader";

function App() {

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
      <Router>
        <main>
          <Navbar />

          <Routes>

            <Route
              path="/"
              element={
                <>
                  <PixelSection />
                  <Suspense fallback={<Loader />}>
                    <Section5 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Section6 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Section3 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Section2 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Section4 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Section7 />
                  </Suspense>
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/images"
              element={
                <Suspense fallback={<Loader />}>
                  <Images />
                </Suspense>
              }
            />

          </Routes>

        </main>
      </Router>
    </>
  );
}
export default App;