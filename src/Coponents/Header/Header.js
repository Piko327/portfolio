import { useState } from "react";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const dynamicNavbar = (e) => {
 
    if (e.pageX<=935 && visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
   
  };
  return (
    <>
      <header className="header">
          <nav className={visible ?"header_nav active":"header_nav " }>
            <ul className="header_ul">
              <li className="header_li">
                <a href="#about">About</a>
              </li>
              <li className="header_li ">
                <a href="#project">Projects</a>
              </li>
              <li className="header_li">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        <button className="material-symbols-outlined" onClick={dynamicNavbar}>
          menu
        </button>
      </header>
    </>  )
};
