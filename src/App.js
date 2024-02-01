import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
    return (

        <div>
            <Header />

            <Hero />

            <About />

            <Projects />

            <Contact />

        </div>
    );
}

export default App;
