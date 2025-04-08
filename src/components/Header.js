import { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <h1>My Portfolio</h1>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <nav className={menuOpen ? "open" : ""}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
