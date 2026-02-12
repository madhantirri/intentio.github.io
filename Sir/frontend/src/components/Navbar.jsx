import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Awards', path: '/awards' },
        { name: 'IPs', path: '/granted-ips' },
        { name: 'A-Hand', path: '/prosthetic-hand' },
        { name: 'Media', path: '/media-coverage' },
        { name: 'Avenues', path: '/avenues' },
        { name: 'Events', path: '/events' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || !isHome ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold font-heading text-white">
                    Intentio<span className="text-secondary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium transition-colors text-white/90 hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Contact Link Logic: 
                        If on Home, scroll to #contact. 
                        If on other pages, go to /#contact (which might need handling) or just /contact page if it existed.
                        Since we don't have a /contact page, but a section in Home, 
                        we can link to "/" and hope the user scrolls, or use a hash link.
                        React Router's <Link to="/#contact"> works if we handle hash scrolling.
                        Or we can use <a href="/#contact">.
                    */}
                    <a href={isHome ? "#contact" : "/#contact"} className="btn btn-primary px-6 py-2 text-sm shadow-lg shadow-secondary/20">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-primary font-medium py-2 border-b border-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={isHome ? "#contact" : "/#contact"}
                                className="btn btn-primary w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
