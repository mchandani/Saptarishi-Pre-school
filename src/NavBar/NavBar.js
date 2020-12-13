import React, { useState } from 'react'
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import Icon from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/fa';

function NavBar() {
    const [toggleBurger, setToggleBurger] = useState(false)
    const [navbar, setNavbarxlActive] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 180) {
            setNavbarxlActive(true)
        }
        else {
            setNavbarxlActive(false)
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={navbar ? 'navbarxl-active' : 'navbarxl'}>
            <div className='container'>
                <nav className="nav">
                    <div className='logo_div'>
                        <h4 className='logo'>saptarishi </h4>
                    </div>

                    <ul className={toggleBurger === true ? 'nav-links nav-active ' : 'nav-links'}>
                        <li >
                            <a>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Home
                            </Link>
                            </a>
                        </li>
                        <li >
                            <a>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    About
                            </Link>
                            </a>
                        </li>
                        <li >
                            <a>
                                <Link

                                    to="teachers"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Teacher
                            </Link>
                            </a>
                        </li>
                        <li >
                            <a>
                                <Link

                                    to="vehicle"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Vehicle
                            </Link>
                            </a>
                        </li>
                        <li ><div style={{ textTransform: "capitalize", letterSpacing: "0rem" }} id="google_translate_element"></div></li>
                    </ul>

                    <div className={toggleBurger === true ? 'burger toggle' : 'burger'} onClick={() => setToggleBurger(!toggleBurger)}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default NavBar;