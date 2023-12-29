import { useState } from "react";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const dynamicNavbar = (e) => {
    if (e.pageX<=935 && visible === true)
  {
    setVisible(false) 

  } 
     else 
     setVisible(true);
  };



  return (
    <>
      <div className={visible ? "closed" : "opened"}></div>
      <header className="header">
        <nav className={visible ? "header_nav active" : "header_nav "}>
          <ul className="header_ul" onClick={dynamicNavbar}>
            <li className="header_li">
              <a href="#about">About</a>
            </li>
            <li className="header_li ">
              <a href="#projects">Projects</a>
            </li>
            <li className="header_li">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="material-symbols-outlined" onClick={dynamicNavbar}>
          {visible ? "menu" : "close"}
        </button>
      </header>
    </>
  );
};
