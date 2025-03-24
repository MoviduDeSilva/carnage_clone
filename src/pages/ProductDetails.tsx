
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight, 
  ChevronLeft, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart,
  Share2,
  Check,
  Info,
  ArrowLeft
} from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

// Sample product data - in a real app this would come from an API
const productData = {
  id: 1,
  name: "Classic Black Tee",
  price: 2900,
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Gray"],
  description: "Our Classic Black Tee is the perfect addition to any wardrobe. Made from premium 100% cotton, this shirt offers both comfort and style. The minimalist design features a subtle embroidered logo on the chest, making it versatile for any occasion. Pair it with jeans for a casual look or layer it under a blazer for a more polished style.",
  details: [
    "100% premium combed cotton",
    "180 GSM fabric weight",
    "Pre-shrunk to minimize shrinkage",
    "Reinforced collar and shoulders",
    "Ethically manufactured"
  ],
  care: "Machine wash cold with similar colors. Tumble dry low. Do not iron design. Do not bleach.",
  images: [
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1503341455253-b2cd22b5ce55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  ],
  category: "T-Shirts",
  sku: "BLK-TS-001",
  isNew: true,
  stock: {
    "S": { "Black": 10, "White": 8, "Gray": 5 },
    "M": { "Black": 15, "White": 12, "Gray": 7 },
    "L": { "Black": 8, "White": 6, "Gray": 3 },
    "XL": { "Black": 6, "White": 4, "Gray": 2 }
  }
};

// Related products
const relatedProducts = [
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

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  
  // Handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    
    // If the current color is not available for this size, reset it
    if (selectedColor && !isColorAvailableForSize(size, selectedColor)) {
      setSelectedColor("");
    }
  };
  
  // Check if color is available for selected size
  const isColorAvailableForSize = (size: string, color: string) => {
    return productData.stock[size as keyof typeof productData.stock]?.[color as keyof typeof productData.stock[keyof typeof productData.stock]] > 0;
  };
  
  // Get available colors for selected size
  const getAvailableColors = () => {
    if (!selectedSize) return productData.colors;
    
    return productData.colors.filter(color => 
      isColorAvailableForSize(selectedSize, color)
    );
  };
  
  // Format price
  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  
  // Check if product is in stock
  const isInStock = () => {
    if (!selectedSize || !selectedColor) return false;
    
    const stock = productData.stock[selectedSize as keyof typeof productData.stock]?.[selectedColor as keyof typeof productData.stock[keyof typeof productData.stock]];
    return stock && stock >= quantity;
  };
  
  // Handle quantity change
  const increaseQuantity = () => {
    if (selectedSize && selectedColor) {
      const stock = productData.stock[selectedSize as keyof typeof productData.stock]?.[selectedColor as keyof typeof productData.stock[keyof typeof productData.stock]];
      if (stock && quantity < stock) {
        setQuantity(prev => prev + 1);
      }
    } else {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (isInStock()) {
      console.log("Adding to cart:", {
        productId: productData.id,
        name: productData.name,
        price: productData.price,
        size: selectedSize,
        color: selectedColor,
        quantity
      });
      
      setAddedToCart(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };
  
  // Handle add to wishlist
  const toggleWishlist = () => {
    setWishlistAdded(!wishlistAdded);
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-fluid">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-8 animate-fade-in">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <Link to={`/shop/${productData.category.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {productData.category}
            </Link>
            <ChevronRight size={14} className="mx-2 text-muted-foreground" />
            <span className="text-foreground font-medium">{productData.name}</span>
          </div>
          
          {/* Back button - Mobile only */}
          <div className="mb-6 md:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm font-medium">
              <ArrowLeft size={16} className="mr-1" />
              Back to Shop
            </Link>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Images */}
            <div className="animate-fade-in">
              {/* Main image */}
              <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={productData.images[currentImage]} 
                  alt={productData.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                
                {/* Image navigation arrows */}
                {productData.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImage(prev => prev === 0 ? productData.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-black hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setCurrentImage(prev => prev === productData.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-black hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
                
                {/* New badge */}
                {productData.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium">
                    NEW
                  </span>
                )}
              </div>
              
              {/* Thumbnail images */}
              {productData.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {productData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-20 h-20 flex-shrink-0 transition-opacity ${
                        currentImage === index ? "opacity-100 ring-2 ring-black" : "opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={image} 
                        alt={`${productData.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-in animate-delay-100">
              <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
              <p className="text-2xl mb-4">{formatPrice(productData.price)}</p>
              
              {/* Product SKU */}
              <p className="text-sm text-muted-foreground mb-6">SKU: {productData.sku}</p>
              
              {/* Size selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Size</label>
                  <button className="text-xs text-muted-foreground underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {productData.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`min-w-[3rem] h-10 px-3 border transition-colors ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400 text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-sm text-muted-foreground mt-2">Please select a size</p>
                )}
              </div>
              
              {/* Color selection */}
              <div className="mb-6">
                <label className="text-sm font-medium block mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                  {getAvailableColors().map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      disabled={selectedSize && !isColorAvailableForSize(selectedSize, color)}
                      className={`min-w-[4.5rem] h-10 px-3 border transition-colors ${
                        selectedColor === color
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400 text-foreground"
                      } ${
                        selectedSize && !isColorAvailableForSize(selectedSize, color)
                          ? "opacity-40 cursor-not-allowed hover:border-gray-300"
                          : ""
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
                {!selectedColor && selectedSize && (
                  <p className="text-sm text-muted-foreground mt-2">Please select a color</p>
                )}
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <label className="text-sm font-medium block mb-2">Quantity</label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className={`w-10 h-10 flex items-center justify-center border border-r-0 border-gray-300 ${
                      quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 h-10 border-y border-gray-300 text-center focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-l-0 border-gray-300 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to cart & Wishlist */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!isInStock()}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 font-medium ${
                    addedToCart
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : !isInStock()
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-black hover:bg-gray-800 text-white"
                  } transition-colors`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      {isInStock() ? "Add to Cart" : "Please Select Options"}
                    </>
                  )}
                </button>
                <button
                  onClick={toggleWishlist}
                  className="flex-shrink-0 flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  <Heart 
                    size={18} 
                    className={wishlistAdded ? "text-red-500 fill-red-500" : ""} 
                  />
                  <span className="sm:hidden md:inline">Wishlist</span>
                </button>
              </div>
              
              {/* Stock status */}
              {selectedSize && selectedColor && (
                <div className={`flex items-center gap-2 text-sm mb-6 ${isInStock() ? "text-green-600" : "text-red-500"}`}>
                  {isInStock() ? (
                    <>
                      <Check size={16} />
                      <span>In stock and ready to ship</span>
                    </>
                  ) : (
                    <>
                      <Info size={16} />
                      <span>Out of stock</span>
                    </>
                  )}
                </div>
              )}
              
              {/* Description tabs */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex border-b border-gray-200">
                  {["description", "details", "care"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm py-3 px-4 font-medium capitalize ${
                        activeTab === tab
                          ? "border-b-2 border-black"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  {activeTab === "description" && (
                    <p className="text-muted-foreground">{productData.description}</p>
                  )}
                  {activeTab === "details" && (
                    <ul className="text-muted-foreground space-y-2">
                      {productData.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 mt-1 text-black flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "care" && (
                    <p className="text-muted-foreground">{productData.care}</p>
                  )}
                </div>
              </div>
              
              {/* Share */}
              <div className="flex items-center pt-4">
                <button className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 size={16} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8 animate-fade-in">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
