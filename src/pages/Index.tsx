
import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Collection Section */}
      <FeaturedCollection />
      
      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "T-Shirts",
                image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
                link: "/shop/t-shirts"
              },
              {
                title: "Hoodies",
                image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                link: "/shop/hoodies"
              },
              {
                title: "Accessories",
                image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
                link: "/shop/accessories"
              }
            ].map((category, index) => (
              <div 
                key={category.title}
                className={`group relative overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <Link to={category.link} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-white text-2xl font-bold mb-3">{category.title}</h3>
                      <span className="inline-flex items-center text-white text-sm border-b border-white pb-1">
                        Shop Now <ArrowRight size={14} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                CARNAGE was born from a passion for high-quality streetwear that makes a statement. 
                Our mission is to create clothing that empowers individuals to express themselves through fashion.
              </p>
              <p className="text-muted-foreground mb-8">
                Each piece is thoughtfully designed with attention to detail, using premium materials 
                to ensure comfort and durability. We're committed to ethical manufacturing and sustainable practices.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-sm border-b border-current pb-1 hover:opacity-70 transition-opacity"
              >
                Learn More About Us <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 md:order-2 animate-fade-in animate-delay-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573407947625-124449fb217d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="About CARNAGE"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Join the CARNAGE Community</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto animate-fade-in animate-delay-100">
              Subscribe to our newsletter to receive exclusive offers, early access to new releases, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto animate-fade-in animate-delay-200">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 text-white px-4 py-3 rounded-l-md sm:rounded-r-none outline-none focus:ring-1 focus:ring-white/30 mb-3 sm:mb-0"
              />
              <button className="bg-white text-black px-6 py-3 rounded-r-md sm:rounded-l-none font-medium hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/50 text-xs mt-4 animate-fade-in animate-delay-300">
              By subscribing you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="py-20">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Join our community and share your style with #CARNAGESTYLE
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
              "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
              "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
              "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            ].map((image, index) => (
              <div 
                key={index}
                className={`aspect-square overflow-hidden group animate-fade-in`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <img 
                    src={image} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-medium">View Post</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
