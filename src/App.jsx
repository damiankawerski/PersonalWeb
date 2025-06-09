import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'; 
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Education from './Education/Education'
import Technologies from './Technologies/Technologies'

function About() {
  return <h2>About page</h2>;
}
function Projects() {
  return <h2>Projects page</h2>;
}



export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="navContainer">
          <NavBar />
        </nav>
        <main className="flex-1 p-4" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
