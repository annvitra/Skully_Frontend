import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, Globe, Shield } from 'lucide-react';
const Footer = () => {
  // Simulating admin check - in real app, this would come from auth context
  const isAdmin = localStorage.getItem('userRole') === 'admin';
  return <footer className="bg-neutral-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4 flex items-center">
              <span className="text-white">Farm Scapes</span>
              <span className="text-accent ml-2 text-sm">S.K.U.L.L.Y.</span>
            </h3>
            <p className="font-roboto text-gray-300 mb-4">
              Powering small farms with AI, shared equipment, and affordable
              automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="font-roboto space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-300 hover:text-accent transition-colors">
                  Equipment Marketplace
                </Link>
              </li>
              <li>
                <Link to="/ai-recommendations" className="text-gray-300 hover:text-accent transition-colors">
                  AI Recommendations
                </Link>
              </li>
              <li>
                <Link to="/prototype-machine" className="text-gray-300 hover:text-accent transition-colors">
                  Prototype Machine
                </Link>
              </li>
              <li>
                <Link to="/farmer-dashboard" className="text-gray-300 hover:text-accent transition-colors">
                  Farmer Dashboard
                </Link>
              </li>
            </ul>
          </div>
          {/* For Users */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              For Users
            </h4>
            <ul className="font-roboto space-y-2">
              <li>
                <Link to="/signup?role=farmer" className="text-gray-300 hover:text-accent transition-colors">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link to="/signup?role=buyer" className="text-gray-300 hover:text-accent transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/signup?role=provider" className="text-gray-300 hover:text-accent transition-colors">
                  For Service Providers
                </Link>
              </li>
              <li>
                <Link to="/signup?role=ngo" className="text-gray-300 hover:text-accent transition-colors">
                  For NGOs
                </Link>
              </li>
              {isAdmin && <li>
                  <Link to="/admin-panel" className="text-accent hover:text-accent-light transition-colors flex items-center">
                    <Shield size={16} className="mr-1" />
                    Admin Panel
                  </Link>
                </li>}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="font-roboto space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-accent mt-1" />
                <span className="text-gray-300">info@farmscapes.in</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-accent mt-1" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Globe size={20} className="mr-2 text-accent mt-1" />
                <div className="text-gray-300">
                  <select className="bg-neutral-dark border border-gray-600 rounded px-2 py-1 text-sm">
                    <option value="hindi">हिंदी (Hindi)</option>
                    <option value="english">English</option>
                    <option value="bhojpuri">भोजपुरी (Bhojpuri)</option>
                    <option value="maithili">मैथिली (Maithili)</option>
                    <option value="bengali">বাংলা (Bengali)</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Partners Section */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <h4 className="font-poppins font-semibold text-center mb-4">
            Our Partners & Supporters
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4].map(item => <div key={item} className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Partner Logo</span>
              </div>)}
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="font-roboto text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Farm Scapes — S.K.U.L.L.Y. All
            rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-xs text-gray-400 hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-accent">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-accent">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;