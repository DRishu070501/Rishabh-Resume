import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {currentYear} Rishabh Dwivedi. All rights reserved.
                </p>
                <p className="footer-tagline">
                    Built with <span className="gradient-text">passion</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
