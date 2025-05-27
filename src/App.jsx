import { lazy, Suspense } from "react";
import "./App.css";
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
import useLenis from "./useLenis";
import Loader from "./Loader";

function App() {
  useLenis();

  return (
    <>
      <main>
        <Navbar />
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
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
export default App;