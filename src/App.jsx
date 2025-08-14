import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import About from './layouts/About';
import Projects from './layouts/Projects';
import Blogs from './layouts/Blogs';
import Footer from './layouts/Footer';
import Contact from './layouts/Contact';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Blogs />
              <Contact />
              <Footer />
            </>
          }
      />
    </Routes>
  );
}


