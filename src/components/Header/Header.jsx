import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "../Header/Header.scss"
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


    return (
        <>
            <header className="header">
                <div className="shell">
                    <div className="header__inner">
                        <nav className={visible ? "header__nav active" : "header__nav "}>
                            <ul className="header__ul" onClick={() => width < 800 ? setVisible(prev => !prev) : setVisible(false)} >
                                <li className="header__li">
                                    <a href="#about">Learning Path</a>
                                </li>

                                <li className="header__li ">
                                    <a href="#projects">Project Gallery</a>
                                </li>
                                <li className="header__li">
                                    <a href="#contact">Let's Connect</a>
                                </li>
                            </ul>
                        </nav>
                        {visible ?
                            <HiMenuAlt3 className="header__btn hidden" onClick={() => setVisible(prev => !prev)} /> :

                            < MdClose className="header__btn hidden" onClick={() => setVisible(prev => !prev)} />}
                    </div>
                </div>


            </header>

        </>
    );
};
