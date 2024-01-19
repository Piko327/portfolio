import App from "./App";
import "./Components/Home/Home.css";
import "./Components/Header/Header.css";
import "./Components/About/Education/Education.css";
import "./Components/About/Skills/Skills.css";
import "./Components/Projects/Projects.css";
import "./Components/Contact/Contact.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
