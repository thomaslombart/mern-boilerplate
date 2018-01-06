import React from 'react';

const Footer = () => (
    <footer className="bg-dark">
        <div className="container py-4">
            <h6 className="text-center text-white my-3">
                <i className="fas fa-copyright"></i> 2017 conçu par Thomas Lombart
            </h6>
            <div className="text-center">
                <a href="https://www.linkedin.com/in/thomas-lombart" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-2x fa-linkedin mx-4"></i>
                </a>
                <a href="https://github.com/thomlom" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-2x fa-github mx-4"></i>
                </a>
                <a href="https://codepen.io/thomlom" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-2x fa-codepen mx-4"></i>
                </a>
                <a href="https://twitter.com/thomas_lombart" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-2x fa-twitter mx-4"></i>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;