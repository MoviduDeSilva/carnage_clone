
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ui/ProductCard";

// Sample product data
const featuredProducts = [
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
    path: "/shop/classic-black-tee"
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
    path: "/shop/urban-streetwear-hoodie"
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
    path: "/shop/minimalist-logo-cap"
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
    path: "/shop/distressed-cargo-pants"
  }
];

const FeaturedCollection = () => {
  return (
    <section className="py-20">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Featured Collection</h2>
            <p className="text-muted-foreground max-w-xl mb-6 md:mb-0 animate-fade-in animate-delay-100">
              Discover our most popular products curated for style and comfort. Quality streetwear for those who set trends.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center text-sm hover:opacity-70 transition-opacity animate-fade-in animate-delay-200"
          >
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`animate-fade-in`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
