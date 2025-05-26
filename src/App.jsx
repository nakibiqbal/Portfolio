import { lazy, Suspense } from "react";
import "./App.css";
const Navbar = lazy(() => import("./Navbar/Navbar"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PixelSection = lazy(() => import("./pages/PixelSection/PixelSection"));
const Section2 = lazy(() => import("./pages/Section2/Section2"));
const Section3 = lazy(() => import("./pages/Section3/Section3"));
const Section4 = lazy(() => import("./pages/Section4/Section4"));
const Section5 = lazy(() => import("./pages/Section5/Section5"));
const Section6 = lazy(() => import("./pages/Section6/Section6"));
import useLenis from "./useLenis";

function App() {
  useLenis();

  return (
    <>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PixelSection />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Section5 />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Section6 />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Section3 />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Section2 />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Section4 />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
export default App;