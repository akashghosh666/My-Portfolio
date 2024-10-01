import React from 'react';
import Separator from '../common/separator/Separator';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Separator />
            <div className="footer-container">
                <p>
                    <img
                        src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/null/external-copyright-marketing-seo-flatart-icons-lineal-color-flatarticons.png"
                        alt=""
                        className="img"
                    />
                    Akash Ghosh
                </p>
            </div>
        </div>
    );
};

export default Footer;
