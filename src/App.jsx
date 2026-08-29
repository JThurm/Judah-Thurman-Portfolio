import Test from "./Test"
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Hobbies from "./components/hobbies/Hobbies"
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><About/></section>
    <section><Services/></section>
    <section id="Portfolio"><Hobbies/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
