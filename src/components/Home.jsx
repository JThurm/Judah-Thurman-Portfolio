import "../app.scss"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Hobbies from "./hobbies/Hobbies";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Cursor from "./cursor/Cursor";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><About/></section>
    <section id="Services"><Services/></section>
    <section id="Passions"><Hobbies/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default Home;