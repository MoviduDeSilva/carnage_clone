
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-20 relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Content */}
        <div className="container-fluid relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Story</h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-100">
              CARNAGE was founded with a passion for high-quality streetwear that makes a statement. Our journey began with a simple idea: create clothing that empowers individuals to express themselves through fashion.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="CARNAGE mission" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="animate-fade-in animate-delay-200">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At CARNAGE, we believe in creating more than just clothing; we're crafting experiences, identity, and confidence. Our mission is to design apparel that stands out through premium quality, innovative designs, and sustainable practices.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to pushing boundaries, challenging norms, and creating clothing that reflects the dynamic, diverse world we live in. Each piece is thoughtfully designed with attention to detail, using premium materials to ensure comfort and durability.
              </p>
              <p className="text-muted-foreground">
                Beyond fashion, we strive to build a community of like-minded individuals who value authenticity, creativity, and self-expression. CARNAGE is more than a brand—it's a movement, a lifestyle, and a statement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on quality. From materials to manufacturing, we ensure every product meets our high standards."
              },
              {
                title: "Sustainability",
                description: "We're committed to reducing our environmental impact through sustainable materials and ethical manufacturing processes."
              },
              {
                title: "Innovation",
                description: "We constantly push boundaries, exploring new designs, materials, and techniques to create unique, forward-thinking products."
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`bg-white p-8 rounded-lg shadow-sm animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                name: "Jamie Smith",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              },
              {
                name: "Sam Taylor",
                role: "Production Manager",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className={`animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-square mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-secondary">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2016",
                title: "The Beginning",
                description: "CARNAGE was born in a small garage, with a vision to create streetwear that challenges conventions."
              },
              {
                year: "2018",
                title: "First Store",
                description: "We opened our first physical store, bringing our unique designs to a wider audience."
              },
              {
                year: "2020",
                title: "Global Expansion",
                description: "CARNAGE expanded globally, shipping to over 50 countries and collaborating with international artists."
              },
              {
                year: "2022",
                title: "Sustainability Initiative",
                description: "We launched our sustainability initiative, committing to reduce our environmental footprint."
              },
              {
                year: "Present",
                title: "Continued Innovation",
                description: "Today, we continue to push boundaries, explore new designs, and build our global community."
              }
            ].map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative pl-10 pb-10 last:pb-0 animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline line */}
                {index < 4 && (
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-black" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-black" />
                
                <div>
                  <span className="text-sm font-bold bg-black text-white px-2 py-1 inline-block mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Join Our Journey</h2>
            <p className="text-white/80 mb-8 animate-fade-in animate-delay-100">
              Be part of the CARNAGE community. Follow us on social media, subscribe to our newsletter, and join us as we continue to push the boundaries of streetwear fashion.
            </p>
            <a 
              href="/shop"
              className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors animate-fade-in animate-delay-200"
            >
              Shop Our Collection
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
