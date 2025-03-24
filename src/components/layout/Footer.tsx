
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-6">CARNAGE</h3>
            <p className="text-gray-400 mb-6">
              Premium streetwear designed with passion and purpose. Elevate your style with our unique collections.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              {[
                { label: "New Arrivals", path: "/shop/new-arrivals" },
                { label: "Best Sellers", path: "/shop/best-sellers" },
                { label: "T-Shirts", path: "/shop/t-shirts" },
                { label: "Hoodies", path: "/shop/hoodies" },
                { label: "Accessories", path: "/shop/accessories" },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors hover-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
                { label: "Careers", path: "/careers" },
                { label: "Terms & Conditions", path: "/terms" },
                { label: "Privacy Policy", path: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors hover-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and launches.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-white/30"
              />
              <button 
                className="bg-white text-black px-3 rounded-r-md hover:bg-gray-200 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              By subscribing you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CARNAGE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a 
                href="mailto:info@carnage.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
              >
                <Mail size={16} className="mr-2" />
                info@carnage.com
              </a>
              <Link 
                to="/shipping"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Shipping
              </Link>
              <Link 
                to="/returns"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
