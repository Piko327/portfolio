import App from "./App";
import "./Coponents/Home/Home.css";
import "./Coponents/Header/Header.css";
import "./Coponents/About/Education/Education.css";
import "./Coponents/About/Skills/Skills.css";
import "./Coponents/Projects/Projects.css";
import "./Coponents/Contact/Contact.css";
import "./Coponents/Details/Details.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
 </BrowserRouter>
  )
