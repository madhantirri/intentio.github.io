import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-12 border-t border-white/10">
            <div className="container text-center">
                <div className="mb-8">
                    <span className="text-2xl font-bold font-heading text-white">
                        Intentio<span className="text-secondary">.</span>
                    </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Intentio Medical Devices. All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs">
                    Future Pipeline: Ahmedabad Hand Project
                </p>
            </div>
        </footer>
    );
};

export default Footer;
