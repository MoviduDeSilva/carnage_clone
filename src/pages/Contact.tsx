
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-28 pb-16">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-muted-foreground mb-0 animate-fade-in animate-delay-100">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <section className="pb-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="mb-4 text-black" size={24} />,
                title: "Visit Us",
                details: [
                  "123 Fashion Street",
                  "Colombo, Sri Lanka"
                ]
              },
              {
                icon: <Mail className="mb-4 text-black" size={24} />,
                title: "Email Us",
                details: [
                  "info@carnage.com",
                  "support@carnage.com"
                ]
              },
              {
                icon: <Phone className="mb-4 text-black" size={24} />,
                title: "Call Us",
                details: [
                  "+94 123 456 789",
                  "Mon-Fri, 9am-5pm"
                ]
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`text-center p-8 border border-gray-200 animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className={i === 0 ? "mb-1" : "text-muted-foreground"}>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form and Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 mb-6 rounded-md">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Returns">Returns & Exchanges</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 border ${formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full bg-black text-white p-3 font-medium transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Store Info */}
            <div className="animate-fade-in animate-delay-200">
              <h2 className="text-2xl font-bold mb-6">Our Flagship Store</h2>
              
              {/* Map placeholder - Would be replaced with an actual map component */}
              <div className="w-full h-80 bg-gray-300 mb-6 flex items-center justify-center">
                <p className="text-gray-500">Google Maps Embed</p>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Store Hours</h3>
              <div className="space-y-2 mb-6">
                {[
                  { day: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
                  { day: "Sunday", hours: "11:00 AM - 5:00 PM" }
                ].map((schedule) => (
                  <div key={schedule.day} className="flex items-start">
                    <Clock size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{schedule.day}: </span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter"].map((platform) => (
                  <a 
                    key={platform}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label={`Visit our ${platform} page`}
                  >
                    <span className="capitalize">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-fluid">
          <h2 className="text-2xl font-bold mb-10 text-center animate-fade-in">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does shipping take?",
                answer: "Domestic orders typically take 3-5 business days. International orders may take 7-14 business days depending on your location and customs processing."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for unworn items in original packaging. Please visit our Returns page for more information on how to initiate a return."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
              },
              {
                question: "How can I track my order?",
                answer: "Once your order ships, you will receive a tracking number via email. You can use this number to track your order on our website or directly with the shipping carrier."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`border-b border-gray-200 pb-6 animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
