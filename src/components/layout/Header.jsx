import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, X, Shield, User } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // Simulating user role - in real app, this would come from auth context
  const userRole = localStorage.getItem('userRole') || null;
  const isAdmin = userRole === 'admin';
  const isLoggedIn = userRole !== null;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'How It Works',
    path: '/how-it-works'
  }, {
    name: 'Marketplace',
    path: '/marketplace'
  }, {
    name: 'AI Recommendations',
    path: '/ai-recommendations'
  }, {
    name: 'Prototype Machine',
    path: '/prototype-machine'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-primary font-poppins font-bold text-xl md:text-2xl">
            Farm Scapes
          </span>
          <span className="text-accent ml-2 text-sm md:text-base">
            S.K.U.L.L.Y.
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map(item => <Link key={item.path} to={item.path} className={`font-roboto text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-neutral-dark'}`}>
              {item.name}
            </Link>)}
          {isLoggedIn ? <div className="flex items-center space-x-3">
              {isAdmin && <Link to="/admin-panel" className="px-4 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors flex items-center">
                  <Shield size={16} className="mr-1" />
                  Admin
                </Link>}
              <Link to="/farmer-dashboard" className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors flex items-center">
                <User size={16} className="mr-1" />
                Dashboard
              </Link>
            </div> : <div className="flex items-center space-x-3">
              <Link to="/signup?role=farmer" className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
                I'm a Farmer
              </Link>
              <Link to="/signup?role=buyer" className="px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent-dark transition-colors">
                I'm a Buyer
              </Link>
            </div>}
        </nav>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-neutral-dark focus:outline-none" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(item => <Link key={item.path} to={item.path} className={`font-roboto py-2 transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-neutral-dark'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              {isLoggedIn ? <div className="flex flex-col space-y-3 pt-2">
                  {isAdmin && <Link to="/admin-panel" className="px-4 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors text-center flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
                      <Shield size={16} className="mr-1" />
                      Admin Panel
                    </Link>}
                  <Link to="/farmer-dashboard" className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                </div> : <div className="flex flex-col space-y-3 pt-2">
                  <Link to="/signup?role=farmer" className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                    I'm a Farmer
                  </Link>
                  <Link to="/signup?role=buyer" className="px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent-dark transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                    I'm a Buyer
                  </Link>
                </div>}
            </nav>
          </div>
        </div>}
    </header>;
};
export default Header;