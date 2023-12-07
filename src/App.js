import "./App.css";
import About from "./Coponents/About/About";
import Contact from "./Coponents/Contact/Contact";
import { Header } from "./Coponents/Header/Header";
import { Home } from "./Coponents/Home/Home";
import Projects from "./Coponents/Projects/Projects";
import Details from "./Coponents/Details/Details";
import { Routes, Route } from "react-router-dom";
import Passwords from "./Coponents/Passwords/Passwords";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Passwords" element={<Passwords />} />
      </Routes>
    </>
  );
}

export default App;
