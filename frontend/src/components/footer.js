import React from "react";
import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div>
                <img className="footer-logo" src={ footerLogo } alt="footer logo" />
            </div>
            <div>
                <p>Copyright Mentor Connect { year }</p>
            </div>
        </footer>
    );
};

export default Footer;