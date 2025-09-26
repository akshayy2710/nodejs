import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />
      <Awards />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
