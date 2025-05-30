
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agenda', href: '#agenda' },
    { name: 'Ponentes', href: '#speakers' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : !scrolled && isOpen 
            ? 'md:bg-transparent bg-[#FEFEFE] py-5' 
            : 'bg-transparent py-5'
      }`}
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center" aria-label="Ir a inicio">
              <img 
                src="/img/Logo_navbar.png" 
                alt="Logo de Adopta Un Junior" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-lg font-semibold transition-colors ${
                    scrolled ? 'text-[#2B2B2B]' : 'text-[#FEFEFE]'
                  } hover:text-brand-purple focus:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 rounded-sm px-2 py-1`}
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.eventbrite.es/e/entradas-revolutiontech-by-adoptaunjunior-google-developers-groups-1380246938749?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple text-xl text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                aria-label="Apúntate al evento"
              >
                Apúntate
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 rounded-sm p-1 ${
                scrolled || (!scrolled && isOpen) ? 'text-[#2B2B2B]' : 'text-[#FEFEFE]'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white shadow-lg px-2 pt-2 pb-4 space-y-1" aria-label="Navegación móvil">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-brand-purple/10 hover:text-brand-purple rounded-md focus:bg-brand-purple/10 focus:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-3 py-2">
              <a
                href="https://www.eventbrite.es/e/entradas-revolutiontech-by-adoptaunjunior-google-developers-groups-1380246938749?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-purple text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Apúntate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
