import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Header = () => {
    const [visible, setVisible] = useState(true);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width >= 768) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }, [width])

    const dynamicNavbar = () => {
        if (width <= 935 && visible === true) {
            setVisible(false)
        }
        else
            setVisible(true);
    };

    return (
        <>
            <header className="header">
                <div className="shell">
                    <div className="header__inner">
                        <nav className={visible ? "header__nav active" : "header__nav "}>
                            <ul className="header__ul" onClick={dynamicNavbar}>
                                <li className="header__li">
                                    <a href="#about">About</a>
                                </li>

                                <li className="header__li ">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="header__li">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        {visible ?
                            <HiMenuAlt3 className="header__btn hidden" onClick={dynamicNavbar} /> :
                            
                            < MdClose className="header__btn hidden" onClick={dynamicNavbar} />}
                    </div>
                </div>


            </header>

        </>
    );
};
