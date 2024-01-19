import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

import { Routes, Route } from "react-router-dom";
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
                />RR
            </Routes>
        </>
    );
}

export default App;
