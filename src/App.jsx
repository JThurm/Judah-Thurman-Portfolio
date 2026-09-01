import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/:hobby" element={<Gallery />} />
    </Routes>
  );
};

export default App;