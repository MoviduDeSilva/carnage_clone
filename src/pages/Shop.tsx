
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import { productsData } from "@/data/products";

const Shop = () => {
  const [products, setProducts] = useState(productsData);
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
  const categories = [...new Set(productsData.map(product => product.category))];
  
  // Apply filters
  useEffect(() => {
    let filteredProducts = [...productsData];
    
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
                  Showing {products.length} of {productsData.length} products
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
