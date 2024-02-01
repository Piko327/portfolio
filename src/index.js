import App from "./App";
import './components/Header/Header.scss'
import "./components/Projects/Projects.css";
import "./components/Contact/Contact.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
