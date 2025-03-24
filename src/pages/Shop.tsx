
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 2900,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/classic-black-tee"
  },
  {
    id: 2,
    name: "Urban Streetwear Hoodie",
    price: 5900,
    category: "Hoodies",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/urban-streetwear-hoodie"
  },
  {
    id: 3,
    name: "Minimalist Logo Cap",
    price: 2200,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/minimalist-logo-cap"
  },
  {
    id: 4,
    name: "Distressed Cargo Pants",
    price: 4900,
    category: "Pants",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/distressed-cargo-pants"
  },
  {
    id: 5,
    name: "Graphic Print Tee",
    price: 3200,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/graphic-print-tee"
  },
  {
    id: 6,
    name: "Leather Biker Jacket",
    price: 12900,
    category: "Jackets",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: true,
    path: "/product/leather-biker-jacket"
  },
  {
    id: 7,
    name: "Chain Necklace",
    price: 1800,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1600721391690-0e9a296db29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: true,
    isBestSeller: false,
    path: "/product/chain-necklace"
  },
  {
    id: 8,
    name: "Relaxed Fit Shorts",
    price: 3500,
    category: "Shorts",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    isNew: false,
    isBestSeller: false,
    path: "/product/relaxed-fit-shorts"
  }
];

const Shop = () => {
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    categories: [],
    price: { min: 0, max: 15000 },
    sortBy: "newest"
  });
  const [showFilters, setShowFilters] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    price: true
  });
  
  // Get unique categories
  const categories = [...new Set(allProducts.map(product => product.category))];
  
  // Apply filters
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Filter by category if there are selected categories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Filter by price
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.price.min && product.price <= filters.price.max
    );
    
    // Sort products
    switch (filters.sortBy) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // Assume id is used for newest items (higher id = newer)
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
    }
    
    setProducts(filteredProducts);
  }, [filters]);
  
  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setFilters(prev => {
      const updatedCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
        
      return {
        ...prev,
        categories: updatedCategories
      };
    });
  };
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      sortBy: e.target.value
    }));
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      categories: [],
      price: { min: 0, max: 15000 },
      sortBy: "newest"
    });
  };
  
  // Toggle filter section visibility
  const toggleFilterSection = (section: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-8 bg-secondary">
        <div className="container-fluid">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Shop All</h1>
        </div>
      </div>
      
      <main className="flex-1 py-12">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter sidebar - Desktop */}
            <aside className="w-full md:w-64 hidden md:block">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                
                {/* Categories filter */}
                <div className="mb-8">
                  <div 
                    className="flex items-center justify-between mb-4 cursor-pointer"
                    onClick={() => toggleFilterSection('categories')}
                  >
                    <h3 className="font-medium">Categories</h3>
                    {expandedFilters.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {expandedFilters.categories && (
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${category}`}
                            checked={filters.categories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="mr-2"
                          />
                          <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Price filter */}
                <div className="mb-8">
                  <div 
                    className="flex items-center justify-between mb-4 cursor-pointer"
                    onClick={() => toggleFilterSection('price')}
                  >
                    <h3 className="font-medium">Price</h3>
                    {expandedFilters.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {expandedFilters.price && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">${filters.price.min / 100}</span>
                        <span className="text-sm">${filters.price.max / 100}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="15000"
                        step="1000"
                        value={filters.price.max}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          price: { ...prev.price, max: parseInt(e.target.value) }
                        }))}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </aside>
            
            {/* Mobile filter button */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-sm font-medium px-4 py-2 border border-gray-300 rounded-md"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>
            </div>
            
            {/* Products grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Showing {products.length} of {allProducts.length} products
                </p>
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="text-sm">Sort by:</label>
                  <select
                    id="sort"
                    value={filters.sortBy}
                    onChange={handleSortChange}
                    className="text-sm bg-transparent border-0 focus:ring-0 cursor-pointer"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              {products.length > 0 ? (
                <div className="product-grid">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No products found</p>
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile filters drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-black/50 md:hidden transition-opacity duration-300 ${
          showFilters ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowFilters(false)}
      >
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-xl max-h-[80vh] overflow-y-auto transform transition-transform duration-300 ${
            showFilters ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium">Filters</h2>
            <button onClick={() => setShowFilters(false)}>
              <X size={20} />
            </button>
          </div>
          
          {/* Filter content here - same as sidebar */}
          <div className="space-y-8">
            {/* Categories filter */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`mobile-category-${category}`}
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`mobile-category-${category}`} className="text-sm cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price filter */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Price</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">${filters.price.min / 100}</span>
                  <span className="text-sm">${filters.price.max / 100}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="1000"
                  value={filters.price.max}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    price: { ...prev.price, max: parseInt(e.target.value) }
                  }))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={clearFilters}
              className="py-3 text-center border border-gray-300 rounded-md text-sm font-medium"
            >
              Clear All
            </button>
            <button
              onClick={() => setShowFilters(false)}
              className="py-3 text-center bg-black text-white rounded-md text-sm font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
