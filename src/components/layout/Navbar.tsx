
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import { searchProducts } from "@/utils/searchUtils";
import { productsData } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof productsData>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    
    const results = searchProducts(productsData, searchQuery);
    setSearchResults(results);
    
    if (results.length === 0) {
      toast({
        title: "No products found",
        description: `No products matching "${searchQuery}" were found.`,
        variant: "destructive"
      });
    } else if (results.length === 1) {
      // Navigate directly to the product if only one result
      navigate(results[0].path);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Nav links with dropdowns
  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      dropdown: false
    },
    { 
      name: "Shop", 
      path: "/shop",
      dropdown: true,
      dropdownItems: [
        { name: "New Arrivals", path: "/shop/new-arrivals" },
        { name: "Best Sellers", path: "/shop/best-sellers" },
        { name: "T-Shirts", path: "/shop/t-shirts" },
        { name: "Hoodies", path: "/shop/hoodies" },
        { name: "Accessories", path: "/shop/accessories" }
      ] 
    },
    { 
      name: "About", 
      path: "/about",
      dropdown: false
    },
    { 
      name: "Contact", 
      path: "/contact", 
      dropdown: false
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tighter z-50 animate-fade-in"
          >
            CARNAGE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link
                  to={link.path}
                  className="text-sm uppercase tracking-wide hover-link font-medium"
                >
                  {link.name}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 z-50">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="btn-transition hover:opacity-70"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link to="/account" className="btn-transition hover:opacity-70" aria-label="Account">
              <User size={20} />
            </Link>
            
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="btn-transition hover:opacity-70 relative" 
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden btn-transition hover:opacity-70"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-fluid h-full flex flex-col pt-24 pb-8">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="text-xl uppercase tracking-wide font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                
                {link.dropdown && (
                  <div className="mt-4 space-y-3">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block text-sm text-gray-700 hover:text-black transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto">
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Carnage. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex items-start pt-32 transition-opacity duration-300 ${
          searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container max-w-3xl mx-auto px-4">
          <form onSubmit={handleSearch} className="relative">
            <Search size={20} className="absolute left-4 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              autoFocus={searchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
                setSearchResults([]);
              }}
              className="absolute right-4 top-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </form>
          
          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wide mb-4">Search Results ({searchResults.length})</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {searchResults.map(product => (
                  <Link 
                    key={product.id}
                    to={product.path}
                    className="group"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                  >
                    <div className="aspect-square bg-gray-100 mb-2 overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {(product.price / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wide mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {["T-shirts", "Hoodies", "New collection", "Sale", "Accessories"].map((tag) => (
                <button 
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
                  onClick={() => {
                    setSearchQuery(tag);
                    handleSearch(new Event('submit') as any);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
